import { makeAutoObservable, runInAction } from "mobx";

//Functions
import { getUsers as getGithubUsers } from "../api";
import { convertApiUsers } from "../utils/convertData";
import { getLastItemInArray } from "../utils/helper";

// Constants
import STRINGS from "../constants/strings";

export class UsersStore {
  users = [];
  lastUserId = 0;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  getUsers = async () => {
    try {
      this.setIsLoading(true);
      const newUsers = await getGithubUsers(this.lastUserId);
      runInAction(() => {
        this.setUsers(newUsers);
        this.setLastUserId();
        this.setIsLoading(false);
      });
    } catch (e) {
      alert(STRINGS.ERROR_FETCH_USER);
    }
  };

  setUsers = (newUsers) => {
    if (newUsers?.length === 0) return;

    const convertedUsers = convertApiUsers(newUsers);
    this.users.push(...convertedUsers);
  };

  setLastUserId = () => {
    // get the last user in the users list, and save the id, for next api call
    const { userId } = getLastItemInArray(this.users);
    this.lastUserId = userId;
  };

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  };
}

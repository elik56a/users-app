import { makeAutoObservable } from "mobx";

//Functions
import { getGithubUsers } from "../api";
import { mapUsersData } from "../utils/mapData";

export class UsersStore {
  users = [];
  lastUserId = 0;
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  getUsers = async () => {
    this.setIsLoading(true);
    const newUsers = await getGithubUsers(this.lastUserId);
    this.setUsers(newUsers);
    this.setLastUserId();
    this.setIsLoading(false);
  };

  setUsers = (newUsers) => {
    if (!newUsers?.length) return;

    const cleanUsersData = mapUsersData(newUsers);
    this.users.push(...cleanUsersData);
  };

  setLastUserId = () => {
    // get the last user in the users list, and take is id, for next api call
    const { userId } = this.users.slice(-1).pop();
    this.lastUserId = userId;
  };

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  };
}

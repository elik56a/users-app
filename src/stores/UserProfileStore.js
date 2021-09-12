import { makeAutoObservable, runInAction } from "mobx";

// Functions
import { getUserProfile } from "../api";
import { convertApiUserProfile } from "../utils/convertData";

// Constants
import STRINGS from "../constants/strings";
export class UserProfileStore {
  user = {};
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  getUser = async (userName) => {
    try {
      this.setIsLoading(true);
      const userProfile = await getUserProfile(userName);
      runInAction(() => {
        this.setUser(userProfile);
        this.setIsLoading(false);
      });
    } catch (e) {
      alert(STRINGS.ERROR_FETCH_USER);
    }
  };

  setUser = (newUser) => {
    const convertedUser = convertApiUserProfile(newUser);
    this.user = convertedUser;
  };

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  };

  resetUserProfile = () => {
    this.user = {};
  };
}

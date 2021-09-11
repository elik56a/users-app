import { makeAutoObservable } from "mobx";

//Functions
import { getUserProfile } from "../api";
import { mapUserProfileData } from "../utils/mapData";

export class UserProfileStore {
  user = {};
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  getUser = async (userName) => {
    this.setIsLoading(true);
    const userProfile = await getUserProfile(userName);
    this.setUser(userProfile);
    this.setIsLoading(false);
  };

  setUser = (newUser) => {
    const cleanUserData = mapUserProfileData(newUser);
    this.user = cleanUserData;
  };

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  };

  resetUserProfile = () => {
    this.user = {};
  };
}

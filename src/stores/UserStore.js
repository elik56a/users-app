import { makeAutoObservable } from "mobx";

//Functions
import { getSpecificUser } from "../api/user";
import { mapUserData } from "../utils/mapData";

export class UserStore {
  user = {};
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  getUser = async (userName) => {
    this.setIsLoading(true);
    const newUsers = await getSpecificUser(userName);
    this.setUser(newUsers);
    this.setIsLoading(false);
  };

  setUser = (newUser) => {
    const cleanUserData = mapUserData(newUser);
    this.user = cleanUserData;
  };

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  };
}

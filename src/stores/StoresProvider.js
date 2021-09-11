import React from "react";

// Modules
import { UsersStore } from "./UsersStore";
import { UserProfileStore } from "./UserProfileStore";

const RootStoreContext = React.createContext();
const usersStore = new UsersStore();
const userProfileStore = new UserProfileStore();

const StoresProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={{ usersStore, userProfileStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

export { RootStoreContext, StoresProvider };

import React from "react";

// Modules
import { UsersStore } from "./UsersStore";
import { UserStore } from "./UserStore";

const RootStoreContext = React.createContext();
const usersStore = new UsersStore();
const userStore = new UserStore();

const StoresProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={{ usersStore, userStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

export { RootStoreContext, StoresProvider };

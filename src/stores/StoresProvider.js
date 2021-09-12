import { createContext } from "react";

// Modules
import { UsersStore } from "./UsersStore";
import { UserProfileStore } from "./UserProfileStore";

// init stores
const usersStore = new UsersStore();
const userProfileStore = new UserProfileStore();

// Create context
export const RootStoreContext = createContext();

// Create provider
export const StoresProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={{ usersStore, userProfileStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

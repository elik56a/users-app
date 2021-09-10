import { useContext } from "react";

// Modules
import { RootStoreContext } from "../stores/StoresProvider";

/**
 *  this is a hook that return all available store in the app
 * @returns Object
 */
export const useStores = () => useContext(RootStoreContext);

/**
 *  this is a hook that return the users store
 * @returns Object
 */
export const useUsersStore = () => {
  const { usersStore } = useStores();
  return usersStore;
};

/**
 *  this is a hook that return the user store
 * @returns Object
 */
export const useUserStore = () => {
  const { userStore } = useStores();
  return userStore;
};

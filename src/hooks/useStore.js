import { useContext } from "react";

// Modules
import { RootStoreContext } from "../stores/StoresProvider";

/**
 *  this is a hook that return all available store in the app
 * @returns {Object} - all app stores
 */
const useStores = () => useContext(RootStoreContext);

/**
 *  this is a hook that return the user store
 * @returns {Object} - user profile store
 *
 */
export const useUsersStore = () => {
  const { usersStore } = useStores();
  return usersStore;
};

/**
 *  this is a hook that return the user profile store
 * @returns {Object} - user profile store
 */
export const useUserProfileStore = () => {
  const { userProfileStore } = useStores();
  return userProfileStore;
};

import { useContext } from "react";

// Modules
import { RootStoreContext } from "../stores/StoresProvider";

/**
 *  this is a hook that return all available store in the app
 * @returns {Object} - the users store
 */
export const useStores = () => useContext(RootStoreContext);

/**
 *  this is a hook that return the user store
 * @returns {Object} - user profile store
 */
export const useUsersStore = () => {
  const { usersStore } = useStores();
  return { ...usersStore };
};

/**
 *  this is a hook that return the user store
 * @returns {Object}
 */
export const useUserProfileStore = () => {
  const { userProfileStore } = useStores();
  return { ...userProfileStore };
};

import axios from "axios";

// Constants
import { apiBaseUrl } from "../constants/api";

/**
 * this function call to the api and get users
 * @param {Number} lastUserId - the id of last user in the page
 * @returns {Array} -list of users data
 */
export const getUsers = async (lastUserId = 0) => {
  const { data } = await axios({
    method: "GET",
    url: `${apiBaseUrl}/users?since=${lastUserId}`,
  });

  return data;
};

/**
 * this function call to the api and get specific user by user name
 * @param {*} userName
 * @returns {Object} - user profile data
 */
export const getUserProfile = async (userName) => {
  const { data } = await axios({
    method: "GET",
    url: `${apiBaseUrl}/users/${userName}`,
  });

  return data;
};

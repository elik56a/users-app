import axios from "axios";

// Constants
import { apiBaseUrl } from "../constants/api";
import STRINGS from "../constants/strings";

/**
 * this function call to the api and get users
 * @param {*} since
 * @returns Array -list of users data
 */
export const getGithubUsers = async (since = 0) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${apiBaseUrl}/users?since=${since}`,
    });

    return data;
  } catch (e) {
    alert(STRINGS.ERROR_FETCH_USERS);
  }
};

/**
 * this function call to the api and get specific user by user name
 * @param {*} userName
 * @returns Object - user profile data
 */
export const getUserProfile = async (userName) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${apiBaseUrl}/users/${userName}`,
    });

    return data;
  } catch (e) {
    alert(STRINGS.ERROR_FETCH_USER);
  }
};

import axios from "axios";

// Constants
import { apiBaseUrl } from "../constants/api";
import STRINGS from "../constants/strings";

/**
 * this function call to the api and get users
 * @param {*} since
 * @returns Array of users
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

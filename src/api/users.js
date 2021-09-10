import axios from "axios";
import { apiBaseUrl } from "../constants/api";

/**
 * this function call to the api and get users
 * @param {*} since
 * @returns Array
 */
export const getGithubUsers = async (since = 0) => {
  const { data } = await axios({
    method: "GET",
    url: `${apiBaseUrl}/users?since=${since}`,
  });

  return data;
};

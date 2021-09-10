import axios from "axios";
import { apiBaseUrl } from "../constants/api";

/**
 * this function call to the api and get specific user by user name
 * @param {*} userName
 * @returns Object
 */
export const getSpecificUser = async (userName) => {
  const { data } = await axios({
    method: "GET",
    url: `${apiBaseUrl}/users/${userName}`,
  });

  return data;
};

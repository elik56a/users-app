/**
 * This function get an array as argument, and return the last item in array
 * @param {Array} - array of data
 * @returns {*} - last item in array
 */
export const getLastItemInArray = (array) => {
  return array.slice(-1).pop();
};

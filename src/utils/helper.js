/**
 * This function is determined if user richened to the bottom of the app
 * @param {*} node
 * @returns Boolean - if user is at end of page
 */
export const isScrolledToBottom = (node) => {
  return node.scrollHeight - node.scrollTop - node.clientHeight < 10;
};

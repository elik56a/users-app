/**
 * This function is determined if user richened to the bottom of the app
 * @param {*} node
 * @returns Boolean
 */
export const isScrolledToBottom = (node) => {
  return node.scrollHeight - node.scrollTop - node.clientHeight < 10;
};

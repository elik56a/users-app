/**
 * This function get a users array data, and format the vars names, and omit unused fields
 * @param {*} users
 * @returns {Array} - list of users formatted data
 */
export const convertApiUsers = (users) => {
  return users.map((user) => ({
    userName: user.login,
    userId: user.id,
    avatarSrc: user.avatar_url,
  }));
};

/**
 * This function get a user object data, and format the vars names, and omit unused props
 * @param {*} user
 * @returns {Object}
 */
export const convertApiUserProfile = ({
  id,
  login,
  avatar_url,
  following,
  public_repos,
  name,
}) => ({
  userId: id,
  userName: login,
  avatarSrc: avatar_url,
  rating: following,
  reposNumber: public_repos,
  name,
});

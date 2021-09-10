import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "@material-ui/core";

// Functions
import { isScrolledToBottom } from "../../utils/helper";
import { useUsersStore } from "../../hooks/stores";

// Components
import UserCard from "../../components/Card/index";
import Loader from "../../components/Loader";

// Styles
import useStyles from "./styles";

const UsersList = () => {
  const { users, isLoading, getUsers } = useUsersStore();
  const classes = useStyles();

  // when page loads - to fetch the users from api
  useEffect(() => getUsers(), [getUsers]);

  const onUserScroll = ({ target }) => {
    const isBottom = isScrolledToBottom(target);
    if (isBottom) {
      getUsers();
    }
  };

  const renderUsersList = () => {
    return (
      <Grid container justifyContent="center">
        {users.map(({ userId, userName, avatarSrc }) => {
          return (
            <Grid item sm={4} key={userId}>
              <UserCard avatarSrc={avatarSrc} userName={userName} />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <div onScroll={onUserScroll} className={classes.pageContainer}>
      {renderUsersList()}
      {isLoading && <Loader />}
    </div>
  );
};

export default observer(UsersList);

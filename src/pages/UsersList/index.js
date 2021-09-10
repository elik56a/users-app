import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "@material-ui/core";

// Functions
import { isScrolledToBottom } from "../../utils/helper";
import { useUsersStore } from "../../hooks/stores";

// Components
import CommonCard from "../../components/Card";
import Loader from "../../components/Loader";
// Styles
import useStyles from "./styles";

const UsersList = () => {
  const usersStore = useUsersStore();
  const { users, isLoading } = usersStore;
  const classes = useStyles();

  // when page loads - to fetch the users from api
  useEffect(() => usersStore.getUsers(), []);

  const onUserScroll = ({ target }) => {
    const isBottom = isScrolledToBottom(target);
    if (isBottom) {
      usersStore.getUsers();
    }
  };

  const renderUsersList = () => {
    return (
      <Grid container justifyContent="center">
        {users.map(({ userId, userName, avatarSrc }) => {
          return (
            <Grid item sm={4} key={userId}>
              <CommonCard avatarSrc={avatarSrc} userName={userName} />
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

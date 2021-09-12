import { useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { Grid } from "@material-ui/core";

// Functions
import { useUserProfileStore } from "../../hooks/useStore";

// Components
import Loader from "../../components/Loader";
import UserCard from "../../components/Card";

// Styles
import useStyles from "./styles";

const UserProfile = () => {
  const classes = useStyles();
  const { userName } = useParams();
  const { user, isLoading, getUser, resetUserProfile } = useUserProfileStore();

  // when page loads - to fetch the user from api
  useEffect(() => {
    getUser(userName);

    return () => resetUserProfile();
  }, [getUser, resetUserProfile, userName]);

  const renderUserCard = () => (
    <Grid container className={classes.cardContainer}>
      <UserCard
        toShowUserInfo
        avatarSrc={user.avatarSrc}
        userName={user.userName}
      />
    </Grid>
  );

  return (
    <Grid container className={classes.pageContainer}>
      {user && renderUserCard()}
      {isLoading && <Loader />}
    </Grid>
  );
};

export default observer(UserProfile);

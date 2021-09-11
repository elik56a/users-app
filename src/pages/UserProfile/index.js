import { useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";

// Functions
import { useUserProfileStore } from "../../hooks/stores";

// Components
import Loader from "../../components/Loader/index";
import UserCard from "../../components/Card/index";

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

  const renderUserCard = () => {
    return (
      <div className={classes.cardContainer}>
        <UserCard
          toShowFullProfile
          avatarSrc={user.avatarSrc}
          userName={user.userName}
        />
      </div>
    );
  };

  return (
    <div className={classes.pageContainer}>
      {user && renderUserCard()}
      {isLoading && <Loader />}
    </div>
  );
};

export default observer(UserProfile);

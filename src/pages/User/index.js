import { useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";

// Functions
import { useUserStore } from "../../hooks/stores";

// Components
import Loader from "../../components/Loader";
import UserCard from "../../components/Card/index";

// Styles
import useStyles from "./styles";

const User = () => {
  const classes = useStyles();
  const { userName } = useParams();
  const { user, isLoading, getUser } = useUserStore();

  // when page loads - to fetch the user from api
  useEffect(() => getUser(userName), [getUser, userName]);

  const renderUserCard = () => {
    return (
      <div className={classes.cardContainer}>
        <UserCard
          toShowMoreInfo
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

export default observer(User);

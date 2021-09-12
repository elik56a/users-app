import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Grid, Container } from "@material-ui/core";

// Hooks
import { useUsersStore } from "../../hooks/useStore";
import { useIsLastElementVisible } from "../../hooks/useIsLastElementVisible";

// Components
import UserCard from "../../components/Card";
import Loader from "../../components/Loader";

const UsersList = () => {
  const { users, isLoading, getUsers } = useUsersStore();
  const observerRef = useRef();
  const lastCardElementRef = useIsLastElementVisible(
    observerRef,
    isLoading,
    getUsers
  );

  // when page loads - to fetch the users from api, but only if there is not users at all
  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, [getUsers, users]);

  const renderUsersList = () =>
    users.map(({ userId, userName, avatarSrc }, index) => (
      <Grid item xs={12} sm={6} md={4} key={userId}>
        {/* if we are in last item - set him the last element ref  */}
        <UserCard
          ref={users.length === index + 1 ? lastCardElementRef : null}
          avatarSrc={avatarSrc}
          userName={userName}
        />
      </Grid>
    ));

  return (
    <Container>
      <Grid container>
        {renderUsersList()}
        {isLoading && <Loader />}
      </Grid>
    </Container>
  );
};

export default observer(UsersList);

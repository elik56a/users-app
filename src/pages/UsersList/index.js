import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Grid, Container } from "@material-ui/core";

// Functions
import { useUsersStore } from "../../hooks/useStore";

// Components
import UserCard from "../../components/Card";
import Loader from "../../components/Loader";
import { useIsAtBottom } from "./../../hooks/useIsAtBottom";

const UsersList = () => {
  const { users, isLoading, getUsers } = useUsersStore();
  const observerRef = useRef();
  const lastCardElementRef = useIsAtBottom(observerRef, isLoading, getUsers);

  // when page loads - to fetch the users from api, but only if there is not users at all
  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, [getUsers, users]);

  const renderUsersList = () =>
    users.map(({ userId, userName, avatarSrc }, index) => (
      <Grid item xs={12} sm={6} md={4} key={userId}>
        {users.length === index + 1 ? (
          <UserCard
            ref={lastCardElementRef}
            avatarSrc={avatarSrc}
            userName={userName}
          />
        ) : (
          <UserCard avatarSrc={avatarSrc} userName={userName} />
        )}
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

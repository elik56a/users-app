import { useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";

// Functions
import { useUserStore } from "../hooks/stores";

// Components
import Loader from "../components/Loader";
import CommonCard from "../components/Card";

const User = () => {
  const { userName } = useParams();
  const userStore = useUserStore();
  const { user, isLoading, getUser } = userStore;

  // when page loads - to fetch the users from api
  useEffect(() => getUser(userName), []);

  return (
    <div>
      {isLoading && <Loader />}
      {user && (
        <CommonCard avatarSrc={user.avatarSrc} userName={user.userName} />
      )}
    </div>
  );
};

export default observer(User);

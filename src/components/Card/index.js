import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";

// Constants
import STRINGS from "../../constants/strings";

// Components
import UserInfo from "../UserInfo/index";
import LinkButton from "../LinkButton";

// Styles
import useStyles from "./styles";

const UserCard = ({ userName, avatarSrc, toShowFullProfile = false }) => {
  const classes = useStyles();

  const renderUserInfo = () => {
    return userName && <UserInfo />;
  };

  return (
    <Card className={classes.card}>
      <Avatar className={classes.avatar} src={avatarSrc} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {userName}
          {toShowFullProfile && renderUserInfo()}
        </Typography>
      </CardContent>
      {!toShowFullProfile && (
        <CardActions>
          <LinkButton linkPath={`user/${userName}`} text={STRINGS.MORE_INFO} />
        </CardActions>
      )}
    </Card>
  );
};

export default UserCard;

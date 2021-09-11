import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";

// Components
import UserInfo from "../UserInfo/index";
import ActionButtons from "../ActionButtons";

// Styles
import useStyles from "./styles";

const UserCard = ({ userName, avatarSrc, toShowMoreInfo = false }) => {
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
          {toShowMoreInfo && renderUserInfo()}
        </Typography>
      </CardContent>
      <CardActions>
        <ActionButtons />
      </CardActions>
    </Card>
  );
};

export default UserCard;

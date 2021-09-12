import { forwardRef } from "react";
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
import UserInfo from "../UserInfo";
import LinkButton from "../LinkButton";

// Styles
import useStyles from "./styles";

const UserCard = forwardRef(
  ({ userName, avatarSrc, toShowUserInfo = false }, ref) => {
    const classes = useStyles();

    return (
      <Card className={classes.card} ref={ref}>
        <Avatar className={classes.avatar} src={avatarSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userName}
            {toShowUserInfo && <UserInfo />}
          </Typography>
        </CardContent>
        {!toShowUserInfo && (
          <CardActions>
            <LinkButton
              linkPath={`user/${userName}`}
              text={STRINGS.MORE_INFO}
            />
          </CardActions>
        )}
      </Card>
    );
  }
);

export default UserCard;

import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Avatar,
  Button,
  Typography,
} from "@material-ui/core";

import STRINGS from "../../constants/strings";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo";

// Styles
import useStyles from "./styles";

export default function UserCard({
  userName,
  avatarSrc,
  toShowMoreInfo = false,
}) {
  const classes = useStyles();

  const renderUserInfo = () => {
    return userName && <UserInfo />;
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Avatar className={classes.avatar} src={avatarSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userName}
            {toShowMoreInfo && renderUserInfo()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/user/${userName}`}
          className={classes.button}
          color="primary"
        >
          {STRINGS.MORE_INFO}
        </Button>
      </CardActions>
    </Card>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Avatar,
  Button,
  Typography,
} from "@material-ui/core";

import STRINGS from "../constants/strings";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    margin: "1rem 2rem",
    textAlign: "center",
  },
  avatar: {
    width: 250,
    height: 250,
    display: "block",
    margin: "0 auto",
  },
  button: {
    display: "block",
    margin: "0 auto",
  },
});

export default function CommonCard({ userName, avatarSrc }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Avatar className={classes.avatar} src={avatarSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userName}
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

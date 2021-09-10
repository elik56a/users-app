import { observer } from "mobx-react-lite";
import Rating from "@material-ui/lab/Rating";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Hooks
import { useUserStore } from "../hooks/stores";

// Constant
import STRINGS from "../constants/strings";

const useStyles = makeStyles({
  root: {
    width: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoItem: {
    margin: "1rem",
  },
});

const UserInfo = () => {
  const { user } = useUserStore();
  const { rating, reposNumber, name } = user;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Rating name="rating" value={rating} disabled />
        <Box>
          <Typography>
            <small>({rating}) </small>
          </Typography>
        </Box>
      </div>
      <Typography className={classes.infoItem}>
        {STRINGS.NAME} : {name}
      </Typography>
      <Typography className={classes.infoItem}>
        {STRINGS.REPOS_NUMBER} : {reposNumber}
      </Typography>
    </div>
  );
};

export default observer(UserInfo);

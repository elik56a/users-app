import { observer } from "mobx-react-lite";
import Rating from "@material-ui/lab/Rating";
import { Typography, Box } from "@material-ui/core";

// Hooks
import { useUserProfileStore } from "../../hooks/stores";

// Constant
import STRINGS from "../../constants/strings";

// Styles
import useStyles from "./styles";

const UserInfo = () => {
  const { user } = useUserProfileStore();
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

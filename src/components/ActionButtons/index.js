import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Constants
import STRINGS from "../../constants/strings";

// Styles
import useStyles from "../Loader/styles";

const ActionButtons = ({ userName }) => {
  const classes = useStyles();

  return (
    <Button
      component={Link}
      to={`/user/${userName}`}
      className={classes.button}
      color="primary"
    >
      {STRINGS.MORE_INFO}
    </Button>
  );
};

export default ActionButtons;

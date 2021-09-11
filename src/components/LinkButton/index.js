import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Styles
import useStyles from "./styles";

const ActionButtons = ({ linkPath, text }) => {
  const classes = useStyles();

  return (
    <Button
      component={Link}
      to={linkPath}
      className={classes.button}
      color="primary"
      variant="outlined"
    >
      {text}
    </Button>
  );
};

export default ActionButtons;

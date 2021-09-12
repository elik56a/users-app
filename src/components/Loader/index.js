import { Backdrop, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Loader = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress size={80} />
    </Backdrop>
  );
};

export default Loader;

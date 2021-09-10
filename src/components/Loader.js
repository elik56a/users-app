import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  loader: {
    margin: "1rem auto",
    display: "block",
  },
  backdrop: {
    zIndex: 2,
    color: "#fff",
  },
});

export default function Loader() {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress size={80} />
    </Backdrop>
  );
}

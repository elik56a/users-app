import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  loader: {
    margin: "1rem auto",
    display: "block",
  },
});

export default function Loader() {
  const classes = useStyles();
  return <CircularProgress className={classes.loader} size={80} />;
}

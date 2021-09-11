import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    // height: "100vh",
  },
  cardContainer: {
    width: "450px",
    margin: "1rem auto",
  },
});

export default useStyles;

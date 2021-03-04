import { Button, Typography, Container } from "@material-ui/core";
import illustration_empy from "static/illustrations/empty_xct9.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  imageError: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    maxHeight: "240px",
    display: "block",
  },
  title: {
    fontSize: "2.3em",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typography variant="h3" className={classes.title}>
          Page not found
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Sorry, we couldn’t find the page you’re looking for. 
        </Typography>
        <img
          src={illustration_empy}
          className={classes.imageError}
          alt="Not found"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/"
        >
          Go tho Home
        </Button>
      </div>
    </Container>
  );
}

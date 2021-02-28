import { Button, Typography, Grid } from "@material-ui/core";
import illustration_empy from "static/illustrations/empty_xct9.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  imageError: {
    margin: "60px auto",
    maxHeight: "320px",
    display: "block",
  },
  subtitle: {
    lineHeight: "1.5",
    color: "#637381",
    fontWeight: 500,
    marginTop: "0.5rem",
  },
  title: {
    fontSize: "2em",
  },
});

export default function NotFound() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh", padding: "0 10px", textAlign: "center" }}
      >
        <Typography variant="h3" className={classes.title}>
          Página no encontrada
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Lo sentimos, parece que la página que estás buscando no existe.
        </Typography>
        <img
          src={illustration_empy}
          className={classes.imageError}
          alt="No encontrado"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/"
        >
          Ir a la página principal
        </Button>
      </Grid>
    </>
  );
}

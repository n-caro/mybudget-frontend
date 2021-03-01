import {
  Container,
  TextField,
  Button,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Debes ingresar un correo electrónico válido.")
    .required("Ingresa un correo electrónico."),
  password: yup
    .string()
    .min(6, "La contraseña debe tener un mínimo de 6 caracteres.")
    .required("Ingresa una contraseña."),
});

export default function SignIn() {
  const history = useHistory();
  const { isLogged, signIn, isError, errorMessage } = useAuth();

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged, history]);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values);
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Iniciar sesión
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          {isError && <Alert severity="error">{errorMessage}</Alert>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoFocus
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container justify="flex-end" spacing={1}>
            <Grid item>
              <Typography variant="body1">¿No tienes una cuenta?</Typography>
            </Grid>
            <Grid item>
              <Link variant="body1" component={RouterLink} to="/signup">
                {"Regístrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

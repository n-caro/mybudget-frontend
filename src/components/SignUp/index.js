import {
  Container,
  TextField,
  Button,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuth from "hooks/useUser";
import Alert from "@material-ui/lab/Alert";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
}));

const validationSchema = yup.object({
  name: yup.string().required("Enter a name."),
  email: yup
    .string()
    .email("The field")
    .required("The field must contain a valid email address."),
  password: yup
    .string()
    .min(6, "The password must be a minimum of 6 characters.")
    .required("Insert a password"),
  passwordConfirm: yup
    .string()
    .required("You must confirm the password.")
    .oneOf([yup.ref("password"), null], "Passwords must match."),
});

export default function SignUp() {
  const { isLogged, signUp, isError, errorMessage } = useAuth();
  const history  = useHistory();
  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged, history]);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(values)
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Sign up to myBudget
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.subtitle}
        >
          Create your myBudget account and start managing your personal budget, it's totally free!
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
        {isError && <Alert severity="error">{errorMessage}</Alert>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email address"
            name="email"
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
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              (formik.touched.password && formik.errors.password) ||
              "The password must have a minimum of 6 characters."
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            id="passwordConfirm"
            name="passwordConfirm"
            label="Confirm password"
            type="password"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            helperText={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="flex-end" spacing={1}>
            <Grid item>
              <Typography variant="body1">Already have an account?</Typography>
            </Grid>
            <Grid item>
              <Link variant="body1" component={RouterLink} to="/signin">
                {"Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

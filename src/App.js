import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "context/UserContext";
import NotFound from "pages/NotFound";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Add from "pages/Add";
import Edit from "pages/Edit";
import Operations from "pages/Operations";
import Home from "pages/Home";

import Header from "components/Header";
import Footer from "components/Footer";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    paddingTop: "100px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "160px",
    },
  },
  main: {
    marginBottom: theme.spacing(3),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <UserContextProvider>
        <div className={classes.root}>
          <Header />
          <Container maxWidth="md" className={classes.main}>
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/edit" component={Edit} />
              <Route exact path="/operations" component={Operations} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
          <footer className={classes.footer}>
            <Footer />
          </footer>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;

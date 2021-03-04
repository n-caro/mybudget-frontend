import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "context/UserContext";
import NotFound from "pages/NotFound";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Add from "pages/Add";
import Edit from "pages/Edit";
import Operations from "pages/Operations";
/*
import Home from "pages/Home";
*/

function App() {
  return (
    <Router>
      <UserContextProvider>
        <div
          className="App"
          style={{
            minHeight: "100vh",
            padding: "0 10px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/operations" component={Operations} />
            {/*
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Add} />*/}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;

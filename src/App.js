import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="*" component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

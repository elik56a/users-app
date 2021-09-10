import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Pages
import UsersList from "./pages/UsersList/index";
import User from "./pages/User/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route exact path="/user/:userName" component={User} />
      </Switch>
    </Router>
  );
}

export default App;

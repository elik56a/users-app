import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Pages
import UsersList from "./pages/UsersList/index";
import UserProfile from "./pages/UserProfile/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route exact path="/user/:userName" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;

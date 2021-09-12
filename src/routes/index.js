import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import UsersList from "../pages/UsersList";
import UserProfile from "../pages/UserProfile";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UsersList} />
      <Route exact path="/user/:userName" component={UserProfile} />
    </Switch>
  </Router>
);

export default Routes;

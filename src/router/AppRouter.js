import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Login from '../pages/Login'

class AppRouter extends Component {
  render() {
    return (
      <div className="AppRouter">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;

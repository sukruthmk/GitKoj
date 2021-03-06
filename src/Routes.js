import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Callback from "./components/callback/callback";
import Home from "./components/home/home.js";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import SecuredRoute from "./components/common/securedRoute/securedRoute";
import Starred from "./components/starred/starred";

class Routes extends Component {
  render() {
    const { checkingSession, postCallback } = this.props;
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route
            exact
            path="/callback"
            render={() => {
              return <Callback postCallback={postCallback} />;
            }}
          />
          <SecuredRoute
            exact
            path="/"
            component={Home}
            checkingSession={checkingSession}
          />
          <SecuredRoute
            exact
            path="/starred"
            component={Starred}
            checkingSession={checkingSession}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;

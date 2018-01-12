import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={`/hi`}
            component={asyncComponent(() => import('../Hi/Hi'))}
          />
          <Route
            exact
            path={`/bye`}
            component={asyncComponent(() => import('../Bye/Bye'))}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

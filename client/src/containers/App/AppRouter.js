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
            path={`/`}
            component={asyncComponent(() => import('../Hi/Hi'))}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

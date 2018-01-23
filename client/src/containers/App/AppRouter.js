import React, {Component} from 'react';
import {Switch, Route, BrowserRouter, Link, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import asyncComponent from '../../helpers/AsyncFunc';
import PageShell from '../Animation/PageShell'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={`/hi`}
            component={asyncComponent(() => import ('../Hi/Hi'))}/>
          <Route
            exact
            path={`/bye`}
            component={asyncComponent(() => import ('../Bye/Bye'))}/>
          <Route
            exact
            path={`/flightsList`}
            component={asyncComponent(() => import ('../FlightsList/FlightsList'))}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

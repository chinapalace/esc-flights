import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import asyncComponent from '../../helpers/AsyncFunc';
import PageShell from '../Animation/PageShell';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={`/flights-list`}
          component={asyncComponent(() => import('../FlightsList/FlightsList'))} />
        <Route
          exact
          path={`/`}
          component={asyncComponent(() => import('../Landing/Landing'))} />
        <Route
          exact
          path={`/map`}
          component={asyncComponent(() => import('../Map/Map'))} />
        <Route
          path={`/no_flights`}
          component={asyncComponent(() => import('../../components/NoFlights/NoFlights'))}
        />

      </div>
    );
  }
}

export default withRouter(AppRouter);

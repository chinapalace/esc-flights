import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import asyncComponent from '../../helpers/AsyncFunc';
import PageShell from '../Animation/PageShell';
import FlightsList from '../FlightsList/FlightsList';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={`/flights-list`}
          component={FlightsList} />
      </div>
    );
  }
}

export default withRouter(AppRouter);

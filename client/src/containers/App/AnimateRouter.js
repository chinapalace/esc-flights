import React, {Component} from 'react';
import {Switch, Route, BrowserRouter, Link, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import asyncComponent from '../../helpers/AsyncFunc';
import Hi from '../Hi/Hi';
import Bye from '../Bye/Bye';
import PageShell from '../Animation/PageShell';

const AnimateRouter = withRouter(({location}) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      className="fade"
      timeout={5000}
      mountOnEnter
      unmountOnExit>
      <Switch location={location}>
        <Route exact path={`/hi`} component={PageShell(Hi)}/>
        <Route exact path={`/bye`} component={PageShell(Bye)}/>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimateRouter;

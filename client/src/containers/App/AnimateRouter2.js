import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {BrowserRouter, Switch, Route, Link, withRouter} from 'react-router-dom';
import Hi from '../Hi/Hi';
import Bye from '../Bye/Bye';

const AnimateRouter2 = withRouter(({location}) => (
  <div>
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={1000}>
        <Switch location={location}>
          <Route exact path='/hi' component={Hi}/>
          <Route exact path='/bye' component={Bye}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
))

export default AnimateRouter2;
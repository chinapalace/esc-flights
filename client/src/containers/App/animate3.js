import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Hi from '../Hi/Hi'

/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/

const AnimationExample = () => (
  <Router>
    <Route
      render={({location}) => (
      <div >
        <Route exact path="/" render={() => (<Redirect to="/10/90/50"/>)}/>
        <div>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <Route location={location} key={location.key} path="/:h/:s/:l" component={Hi}/>
          </CSSTransitionGroup>
        </div>
      </div>
    )}/>
  </Router>
)

export default AnimationExample;
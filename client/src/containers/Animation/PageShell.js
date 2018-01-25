import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const PageShell = Page => {
  return props => <div className="page">
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={0}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName={props.match.path === '/bye'
      ? 'SlideIn'
      : 'SlideOut'}>
      <Page {...props}/>
    </ReactCSSTransitionGroup>
  </div>;
};
export default PageShell;
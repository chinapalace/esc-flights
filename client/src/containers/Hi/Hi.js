import React from 'react';
import PageShell from '../Animation/PageShell';

class Hi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {props} = this;

    return (
      <div >
        <h1>Hello World</h1>
        <h1>
          Hi
        </h1>
      </div>
    );
  }
}

export default Hi;
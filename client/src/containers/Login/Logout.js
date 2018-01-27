import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Logout extends Component {
  render() {
    return (
      <Button raised color="primary">
        <a href="/api/logout" >
          Logout
        </a>
      </Button>
    );
  }
}

export default Logout;

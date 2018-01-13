import React, { Component } from 'react';
import { Button } from 'antd';

class Logout extends Component {
  render() {
    return (
      <div>
        <Button href="/api/logout" type="primary">
          Logout
        </Button>
      </div>
    );
  }
}

export default Logout;

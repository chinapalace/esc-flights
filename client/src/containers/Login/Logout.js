import React, { Component } from 'react';
import { Button } from 'antd';

class Logout extends Component {
  render() {
    return (
      <div>
        <a href="/api/logout" type="primary">
          Logout
        </a>
      </div>
    );
  }
}

export default Logout;

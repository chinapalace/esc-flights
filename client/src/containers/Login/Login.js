import React, { Component } from 'react';
import { Button } from 'antd';

class Login extends Component {
  render() {
    return (
      <div>
        <a href="/auth/google" type="primary">
          Login
        </a>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Button } from 'antd';

class Login extends Component {
  render() {
    return (
      <div>
        <Button href="/auth/google" type="primary">
          Login
        </Button>
      </div>
    );
  }
}

export default Login;

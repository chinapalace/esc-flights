import React, { Component } from 'react';
import { Button } from 'antd';

class Login extends Component {
  render() {
    return (
      <div>
        <Button href="/auth/google" type="primary">
          Login with Google
        </Button>
      </div>
    );
  }
}

export default Login;

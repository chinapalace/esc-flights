import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Login extends Component {
  render() {
    return (
      <Button raised color="primary">
        <a href="/auth/google">
          Login
        </a>
      </Button>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Layout } from 'antd';

import TimeForm from '../Form/Form';

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }}
        width="440"
      >
        <div className="logo" />
        <TimeForm />
      </Sider>
    );
  }
}

export default Sidebar;

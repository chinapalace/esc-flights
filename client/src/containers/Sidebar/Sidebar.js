import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import TimeForm from '../Form/Form';
import Login from '../Login/Login';
import Logout from '../Login/Logout';

const { Sider } = Layout;

class Sidebar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Login />;

      default:
        return <Logout />;
    }
  }
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width="440"
        style={{ backgroundColor: '#f0f2f5' }}
      >
        <TimeForm />
        {this.renderContent()}
      </Sider>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Sidebar);

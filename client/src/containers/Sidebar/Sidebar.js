import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import FullWidthTabs from '../Search/Tab';
import WrappedSearch from '../Search/Search';
import TimeForm from '../Form/Form';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Form from '../Form/Form';

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

        width="440"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
        }}>
        <div className="esc-logo"><span></span>ESC Flights</div>
        <FullWidthTabs location={this.props.location} />
        {this.renderContent()}
      </Sider>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default withRouter(connect(mapStateToProps)(Sidebar));

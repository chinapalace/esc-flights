import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import FullWidthTabs from '../Search/Tab';
import WrappedSearch from '../Search/Search';
import TimeForm from '../Form/Form';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Form from '../Form/Form';
import logo from '../../images/paper-airplane-outline.png'


const { Sider } = Layout;

class Sidebar extends Component {

  render() {
    return (
      <Sider

        width="500"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
        }}>
        <div className="esc-logo">
          <Link to={'/'}>  <img id="logo" src={logo} width="32" height="32" alt="" ></img></Link>
          <span><b>ESC</b> Flights</span>
        </div>
        <FullWidthTabs location={this.props.location} />
      </Sider>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default withRouter(connect(mapStateToProps)(Sidebar));

import React, { Component } from 'react';
import AppRouter from './AppRouter';
import AnimateRouter from './AnimateRouter';
import AnimateRouter2 from './AnimateRouter2';
import SwitchRouter from './SwitchAnimate'
import { Layout, Icon } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';
import '../../index.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { BrowserRouter, withRouter } from 'react-router-dom';
import DashAppHolder from './appHolder';
import AnimationExample from './animate3'

const { Header, Content } = Layout;
export class App extends Component {
  componentDidMount() {
    this
      .props
      .fetchUser();
  }

  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <DashAppHolder>
        <Layout
          style={{
            flexDirection: 'row',
            overflowX: 'hidden'
          }}>
          <Sidebar location={this.props.location} />

          <Layout style={{
            height: '100vh'
          }}>

            <Content
              style={{
                textAlign: 'center',
                margin: '0',
                padding: 0,
                background: '#fff',
                minHeight: 280
              }}>
              <AppRouter />
            </Content>
          </Layout>
        </Layout>
      </DashAppHolder>
    );
  }
}

export default withRouter(connect(null, actions)(App));

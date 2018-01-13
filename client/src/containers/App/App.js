import React, { Component } from 'react';
import AppRouter from './AppRouter';
import { Layout, Icon } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const { Header, Content } = Layout;
export class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
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
      <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
        <Sidebar collapsed={this.state.collapsed} />

        <Layout
          style={{
            height: '100vh'
          }}
        >
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              textAlign: 'center',
              margin: '0',
              padding: 0,
              background: '#fff',
              minHeight: 280
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(null, actions)(App);

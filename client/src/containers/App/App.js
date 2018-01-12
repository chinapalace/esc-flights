import React, { Component } from 'react';
import AppRouter from './AppRouter';
import { Layout, Icon, Menu } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import TimeForm from '../Form/Form';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {
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
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width="440"
          style={{ backgroundColor: '#f0f2f5' }}
        >
          <TimeForm />
        </Sider>

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

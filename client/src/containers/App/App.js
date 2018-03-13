import React, { Component } from 'react';
import AppRouter from './AppRouter';
import { Layout, Icon, Affix } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import DashAppHolder from './appHolder';
import './App.css';
import '../../index.css';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import FAB from '../Button';


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
            <Affix style={{ position: 'absolute', top: 210, left: 470, zIndex: 1 }}>
              <Button fab color="primary" aria-label="add" >
                <Link to='/map'>
                  <AddIcon />
                </Link>
              </Button>
            </Affix>
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

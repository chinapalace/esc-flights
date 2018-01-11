import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <AppRouter />
      </div>
    );
  }
}

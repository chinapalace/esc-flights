import React, { Component } from 'react';
import { Card } from 'antd';
import Toggle from '../../components/toggle/toggle';

export default class Header extends Component {

  render() {
    return (
      <div className="card">
        <div className="top-card">
          <div className="container">
            <i className="material-icons md-36">arrow_downward</i>
            <span>
              <span>Choose an outbound flight</span>
              <p id="no-margin">Sort by: best price</p>
            </span>
          </div>
        </div>
        <div className="small-card">
          <div className="container">
            <span>Prices for round trip. <a href="">Additional bag fees may apply</a></span>
          </div>
        </div>
        <div className="bottom-card">
          <div className="container">
            <i className="material-icons md-36">track_changes</i>
            <div> <span> <b>Track Prices</b> <a href="#">Learn More</a></span>
              <p id="no-margin">Recieve emails with prices changes and travel tips for this trip.</p></div>
            <div className="toggle"><Toggle /></div>

          </div>
        </div>
      </div>

    );
  }
}
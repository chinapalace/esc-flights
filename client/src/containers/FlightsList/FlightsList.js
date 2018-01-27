import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Layout } from 'antd';
import Icon from '../../components/icons/Icon';
import moment from 'moment';
import Header from './Header';
import FLightCard from './FlightCard';
import { createSkeletonProvider } from '@trainline/react-skeletor';

const { Content } = Layout;
class FlightsList extends Component {


  renderGreeting() {
    if (this.props.flights.length > 0)
      switch (this.props.auth) {
        case false:
          console.log(this.props.auth)
          return;
        default:
          return (
            <div className="greeting">
              <span>Hi {this.props.auth.name}, </span>
            </div>
          );
      }
  }

  render() {
    return (
      <Content
        id="flight-list"
        style={{
          padding: '0px 40px',
          backgroundColor: 'whitesmoke',
        }}>
        <div> {this.props.flights.length > 0 &&
          <div>
            <h1>{this.renderGreeting()}</h1>
            <h3>Here are the results based on your filters</h3>
            <br />
            <Header />
            <br />
          </div>
        }
          <div>
            <FLightCard />
          </div>
        </div>
      </Content>
    )
  }
}

function mapStateToProps({ flights, auth }) {
  return { flights, auth }
}

export default connect(mapStateToProps)(FlightsList);
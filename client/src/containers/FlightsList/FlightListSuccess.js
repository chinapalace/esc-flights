import React from 'react';
import Header from './Header';
import FLightCard from './FlightCard';
import { Layout } from 'antd';

const { Content } = Layout;

export default class FlightListSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGreeting() {
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
    const {
      props,
    } = this;

    return (
      <Content
        id="flight-list"
        style={{
          padding: '0px 40px',
          backgroundColor: 'whitesmoke',
        }}>
        <div>
          <h1>{this.renderGreeting()}</h1>
          <h3>Here are the results based on your filters</h3>
          <br />
          <Header />
          <br />
        </div>
        <div>
          <FLightCard />
        </div>
      </Content>
    )
  }
}
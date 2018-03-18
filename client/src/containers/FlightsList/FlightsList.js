import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../../redux/actions/index";
import { Card, Layout } from 'antd';
import Icon from '../../components/icons/Icon';
import { CircularProgress } from 'material-ui/Progress';
import moment from 'moment';
import Header from './Header';
import FLightCard from './FlightCard';
import NoFlights from '../../components/NoFlights/NoFlights'
import { createSkeletonProvider } from '@trainline/react-skeletor';

const { Content } = Layout;


class FlightsList extends Component {
  constructor(props) {
    super();
    this.state = {
      success: null,
      loading: false
    }
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
    console.log(this.props.load);
    let condRender = null;

    if (this.props.load.requestPending) {
      condRender =
        <Content>
          <div
            style={{
              paddingTop: '45vh'
            }}>
            <CircularProgress size={50} />
          </div>
        </Content>
    }
    else if (this.props.load.requestSuccess) {

      condRender =
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
    } else if (this.props.load.requestFail) {
      condRender = <NoFlights />
    }
    return (
      condRender
    )
  }
}

function mapStateToProps({ flights, auth, load }) {
  return { flights, auth, load }
}

export default connect(mapStateToProps)(FlightsList);
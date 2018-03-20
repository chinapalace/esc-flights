import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../../redux/actions/index";
import { Card, Layout } from 'antd';
import Icon from '../../components/icons/Icon';
import moment from 'moment';
import NoFlights from '../../components/NoFlights/NoFlights'
import { createSkeletonProvider } from '@trainline/react-skeletor';
import FlightListSuccess from './FlightListSuccess'
import Loading from './Loading'

const { Content } = Layout;

class FlightsList extends Component {
  render() {
    let condRender = null;

    if (this.props.load.requestPending) {
      condRender =
        <Loading />
    }

    else if (this.props.load.requestSuccess) {
      condRender =
        <FlightListSuccess auth={this.props.auth} />
    }

    else if (this.props.load.requestFail) {
      condRender = <NoFlights />
    }
    return (
      condRender
    )
  }
}

function mapStateToProps({ auth, load }) {
  return { auth, load }
}

export default connect(mapStateToProps)(FlightsList);
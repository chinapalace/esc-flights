import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import Icon from '../../components/icons/Icon';


class FlightsList extends Component {
  componentWillMount() {

  }


  // renderIcon(code) {
  //   switch (flights.) {
  //     case:
  //   }
  // }
  renderFlights() {

    return this.props.flights.map((flight, i) => {
      return (
        <Card
          hoverable
          key={i}
        >
          <div>{flight.PTC_FareBreakdown.Adult.TotalAdultFare}</div>
          <div><Icon icon={flight.FlightSegment[0].OperatedByAirline.CompanyText} /></div>
          <div>

            <p>Total Time</p>
            {flight.FlightSegment[0].FlightDuration}
          </div>
        </Card>
      );
    });
  }
  render() {

    return (
      <div>
        <div>
          <h1>Hi {this.props.auth.name}</h1>
          <h3>Here are the results based on your filters</h3>
        </div>
        <div>
          {this.renderFlights()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ flights, auth }) {
  return { flights, auth }
}

export default connect(mapStateToProps)(FlightsList);
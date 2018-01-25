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
        {this.renderFlights()}
      </div>

    )
  }
}

function mapStateToProps({ flights }) {
  return { flights }
}

export default connect(mapStateToProps)(FlightsList);
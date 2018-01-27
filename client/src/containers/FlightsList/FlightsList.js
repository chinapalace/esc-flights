import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Layout } from 'antd';
import Icon from '../../components/icons/Icon';
import moment from 'moment';
import Header from './Header';


const { Content } = Layout;
class FlightsList extends Component {

  getTime(date) {
    const fields = date.split('T');
    const time = fields[1];
    return time;
  }

  splitTime(numberOfHours) {
    var Days = Math.floor(numberOfHours / 24);
    var Remainder = numberOfHours % 24;
    var Hours = Math.floor(Remainder);
    var Minutes = Math.floor(60 * (Remainder - Hours));
    return ((Days * 24) + Hours + "h " + Minutes + "m")
  }


  renderGreeting() {
    if (this.props.flights)
      switch (this.props.auth) {
        case null:
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

  renderFlights() {

    return this.props.flights.map((flight, i) => {

      return (
        <Card
          hoverable
          key={i}

        >
          <div className="flight-list-card">
            <div className="flight-list-card__price">
              <b>${Math.floor(flight.PTC_FareBreakdown.Adult.TotalAdultFare)}</b>
              <h4>one way</h4>
            </div>
            <div className="flight-list-card__icon">
              <Icon icon={flight.FlightSegment[0].OperatedByAirline.CompanyText} />
              <div className="flight-list-card__dateTime">
                <span>{this.getTime(flight.FlightSegment[0].DepartureDateTime)} - {this.getTime(flight.FlightSegment[0].ArrivalDateTime)}</span>
                <p>Airline &middot; Airline</p>
              </div>
            </div>

            <div className="flight-list-card__total-time">
              <span>{this.splitTime(flight.FlightSegment[0].FlightDuration)}</span>
              <p>Total Time</p>

            </div>

            <div className="flight-list-card__total-time">
              <span>Nonstop</span>
              <p></p>

            </div>
          </div>
        </Card>
      );
    });
  }
  render() {
    return (
      <Content
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
            {this.renderFlights()}
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
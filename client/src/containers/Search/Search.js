import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  InputNumber
} from 'antd';

import { fetchFlights } from '../../redux/actions/index'

const Option = Select.Option;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      departureDate: moment(),
      returnDate: moment(),
      classOfService: 'ECONOMY',
      passengers: 1
    }

    this.onInputChange = this
      .onInputChange
      .bind(this);

    this.onFormSubmit = this
      .onFormSubmit
      .bind(this);

    this.onDateChange = this
      .onDateChange
      .bind(this);

    this.onClassChange = this
      .onClassChange
      .bind(this);

    this.onPassengerChange = this
      .onPassengerChange
      .bind(this);
  }

  onInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value })
  }

  onDateChange(date, dateString) {
    this.setState({ departureDate: date })
  }

  onClassChange(value) {
    this.setState({ classOfService: value })
  }

  onPassengerChange(value) {
    this.setState({ passengers: value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.destination, this.state.origin, (this.state.departureDate).format("YYYY-MM-DD"), this.state.classOfService, this.state.passengers)
    const request = {
      "FlightSearchRequest": {
        "Adults": this.state.passengers,
        "Child": 0,
        "Seniors": 0,
        "InfantInLap": 0,
        "InfantOnSeat": 0,
        "Youths": 0,
        "Kid": 0,
        "TypeOfTrip": "ONEWAYTRIP",
        "ClassOfService": this.state.classOfService,
        "SearchAlternateDates": false,
        "FromTime": null,
        "ToTime": null,
        "SegmentDetails": [
          {
            "Origin": this.state.origin,
            "Destination": this.state.destination,
            "DepartureDate": (this.state.departureDate).format("YYYY-MM-DD"),
            "DepartureTime": "1100"
          }
        ]
      },
      "ResponseVersion": "VERSION41"
    }

    this
      .props
      .fetchFlights(request)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Row type="flex" justify="center">
          <h1>ESC Flights</h1>
        </Row>
        <Row type="flex" justify="center">
          <Col span={20}>
            <p>Origin</p>
            <Input name="origin" value={this.state.origin} onChange={this.onInputChange} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={20}>
            <p>Destination</p>
            <Input
              name="destination"
              value={this.state.destination}
              onChange={this.onInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <DatePicker
              name="departureDate"
              value={this.state.departureDate}
              onChange={this.onDateChange} />

          </Col>
          <Col span={10}>
            <Select
              defaultValue="ECONOMY"
              onChange={this.onClassChange}
              name="classOfService">
              <Option value='ECONOMY'>Economy</Option>
              <Option value='PREMIUMECONOMY'>Premium Economy</Option>
              <Option value='BUSINESS'>Business</Option>
              <Option value='FIRST'>First</Option>
            </Select>
            <InputNumber
              min={1}
              max={10}
              defaultValue={1}
              onChange={this.onPassengerChange} />
          </Col>
        </Row>
        <button type="submit">Submit</button>
      </form>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFlights
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
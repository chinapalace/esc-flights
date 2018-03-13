import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import {
  Row,
  Col,
  Input,
  InputNumber
} from 'antd';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import SuggestSelect from '../AutoSelect.js'

import { fetchFlights } from '../../redux/actions/index'
import FullWidthTabs from './Tab';


const Option = Select.Option;

const d = new Date();
const date = d.getFullYear() + "-" + ("0" + d.getMonth() + 1).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
console.log(date);


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}



const styles = () => ({
  textField: {
    marginRight: 50,
    marginTop: 500,
  },
})

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      departureDate: date,
      returnDate: moment(),
      classOfService: 'ECONOMY',
      passengers: '1'
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

    this.onDestChange = this
      .onDestChange
      .bind(this);

    this.onDepartChange = this
      .onDepartChange
      .bind(this);
  }

  onInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: event.target.value })
  }

  onDepartChange(value) {
    this.setState({ origin: value })
  }

  onDestChange(value) {
    this.setState({ destination: value })
  }

  onDateChange(defaultValue) {
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
    this.props.history.push('/flights-list');
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
            "DepartureDate": (this.state.departureDate),
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

  getCodes(input) {
    if (!input) {
      return Promise.resolve({
        options: [
          { label: 'Delhi', value: 'DEL' },
          { label: 'Mumbai', value: 'MUM' }
        ]
      });
    }
    const KEY = '97bfa12f-0eb0-4024-a08b-7983a27a1b0a';
    const url = 'http://iatacodes.org/api/v6/autocomplete?query=' + input + '&api_key=' + KEY;

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    return fetch(proxyUrl + url)
      .then((response) => {
        return response.json();
      }).then((json) => {
        var options = [];
        json.each(['response']['airports'], (airport) => {
          options.push({
            label: airport['name'],
            value: airport['code']
          })
        });
        console.log(options);
        return { options: options };
      });
  }


  render() {
    return (
      <div id="search-input" >
        <form onSubmit={this.onFormSubmit} autoComplete="off" className="search">
          <div>
            <br />
          </div>
          <p>Destination Details</p>
          <div className="destination-details">
            <i style={{ marginRight: 10 }} className="material-icons md-dark md-inactive">flight_takeoff</i>
            <SuggestSelect
              placeholder="Travel from"
              style={{ width: 337 }}
              name="origin"
              value={this.state.origin}
              onChange={this.onDepartChange}
              loadOptions={this.getCodes}
            />
          </div>
          <div className="destination-details">
            <i style={{ marginTop: 10, marginRight: 10 }} className="material-icons md-dark md-inactive">flight_land</i>
            <SuggestSelect
              placeholder="Travel to"
              style={{ width: 337, marginTop: 10 }}
              name="destination"
              value={this.state.destination}
              onChange={this.onDestChange} />
          </div>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div className="travel-selects">
            <div>
              <p>Travel Dates</p>
              <TextField
                style={{ color: 'grey' }}
                type="date"
                name="departureDate"
                value={this.state.departureDate}
                onChange={this.onInputChange} />
            </div>
            <div className="passenger-details">
              <p>Passenger Details</p>

              <Select
                fullWidth
                onChange={this.onInputChange}
                name="classOfService"
                value={this.state.classOfService}>
                <MenuItem value='ECONOMY'>Economy</MenuItem>
                <MenuItem value='PREMIUMECONOMY'>Premium Economy</MenuItem>
                <MenuItem value='BUSINESS'>Business</MenuItem>
                <MenuItem value='FIRST'>First</MenuItem>
              </Select>
              <Select
                fullWidth
                onChange={this.onInputChange}
                name="passengers"
                value={this.state.passengers}>
                <MenuItem value='1'>1 Adult</MenuItem>
                <MenuItem value='2'>2 Adults</MenuItem>
                <MenuItem value='3'>3 Adults</MenuItem>
                <MenuItem value='4'>4 Adults</MenuItem>
              </Select>
            </div>
          </div>

          <div className="search-button">

            <Button raised color="primary" type="submit">Search</Button>

          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFlights
  }, dispatch);
}

const WrappedSearch = withStyles(styles)(Search)
export default withRouter(connect(null, mapDispatchToProps)(WrappedSearch));
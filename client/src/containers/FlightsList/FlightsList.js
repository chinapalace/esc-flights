import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlightsList extends Component {
  renderFlights() {
    <tr>
      <td></td>
    </tr>
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    )
  }
}

function mapStateToProps({ flights }) {
  return { flights }
}

export default connect(mapStateToProps)(FlightsList);
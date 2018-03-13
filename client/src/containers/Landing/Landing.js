import React, { Component } from 'react';
import { connect } from 'react-redux';
import mp4 from '../../images/Cloud_Surf.mp4';
import webm from '../../images/Cloud_Surf.webm';
import Login from '../Login/Login';
import Logout from '../Login/Logout';



const styles = {
  root: {
    width: 'auto',
    opacity: '0.7',
    height: '100vh',
    objectFit: 'fill',
    postion: 'fixed',
    zIndex: -100,
  },
};

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Login />;

      default:
        return <Logout />;
    }
  }
  render() {
    return (

      <div>

        <div className="landing-page">
          <div className="landing-text">
            <span>It's a big world. </span>
            <br />
            <span>Exploring it just got easier.</span>
            <div> {this.renderContent()}</div>

          </div>
          <video style={styles.root} id="background-video" loop autoPlay>
            <source src={mp4} type="video/mp4" />
            <source src={webm} type="video/webm" />
            Your browser does not support the video tag.
            </video>
        </div>


      </div>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Landing);

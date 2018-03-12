import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Car from '../Car/Car';

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkXajOGBBSgAF1rB01ndDK_OmKMpZJhws&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <div>
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 46.204391, lng: 6.143158 }}>
      <Marker position={{ lat: 52.520008, lng: 13.404954 }} />
      <Marker position={{ lat: 48.864716, lng: 2.349014 }} />
      <Marker position={{ lat: 41.390205, lng: 2.154007 }} />
      <Marker position={{ lat: 41.890251, lng: 12.492373 }} />
      <Marker position={{ lat: 47.497912, lng: 19.040235 }} />
      <Marker position={{ lat: 48.137154, lng: 11.576124 }} />
      <Marker position={{ lat: 52.237049, lng: 21.017532 }} />
      <Marker position={{ lat: 51.509865, lng: -0.118092 }} />
      <Marker position={{ lat: 45.464211, lng: 9.191383 }} />
      <Marker position={{ lat: 50.0755381, lng: 14.43780049999998 }} />
      <Marker position={{ lat: 47.373878, lng: 8.545094 }} />
      <Marker position={{ lat: 38.751106, lng: -9.152584 }} />
      <Marker position={{ lat: 40.416775, lng: -3.703790 }} />
    </GoogleMap>
    <Car />
  </div>
  );

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }


export default Map;
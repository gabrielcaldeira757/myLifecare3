import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";

class MapaGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {     
            showingInfoWindow: false,
            activeMarker: {},
            cep: '',
            lat: '',
            lng: ''
        };
      }

      getLatlong(){
        Geocode.fromAddress(this.state.cep).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              
              this.setState(lat) 
              this.setState(lng)
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
          );
     }

     getEndereco(){
      Geocode.fromLatLng(this.state.lat, this.state.lng).then(
        response => {
          const address = response.results[0].formatted_address;
         
          console.log(address);
          return address
        },
        error => {
          console.error(error);
        }
      );

     }
  
    render() {

    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.cep}</h1>
          </div> 
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD7BZdVGsoJ89nQNQkF_HD9KIwAtPPuGQE' )
  })(MapaGoogle)

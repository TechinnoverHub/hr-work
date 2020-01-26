import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = 'AIzaSyAkVGfejx5-N6Z5DdCO0uXI1kY-F0JVvls';
const mapStyles = {
  width: '100%',
  height: '327px'
};

const CustomMap = props => {
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({ apiKey: API_KEY })(CustomMap);

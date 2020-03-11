import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function getApiKey() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;
  if (apiKey) {
    return apiKey;
  } else {
    throw new Error('GOOGLE MAPS API KEY IS MISSING !!');
  }
}
const API_KEY = getApiKey();

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

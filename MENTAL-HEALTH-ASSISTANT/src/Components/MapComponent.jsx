import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '40%',
  height: '200px',
};

const MapComponent = ({ userLocation, doctors }) => {
  const center = userLocation;

  return (
    <LoadScript googleMapsApiKey="AlzaSyYXj_paOJOx4lHXe25XlkG0wEp1HrR4k1r">
      <GoogleMap  center={center} zoom={12}>
        <Marker position={userLocation} label="You" />
        {doctors.map((doctor) => (
          <Marker
            key={doctor.name}
            position={{ latitude: doctor.latitude, longitude: doctor.longitude }}
            label={doctor.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

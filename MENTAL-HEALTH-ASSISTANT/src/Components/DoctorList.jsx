import React from 'react';
import { calculateDistance } from '../services/distance';

const DoctorList = ({ userLocation, doctors }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => {
        const distance = calculateDistance(userLocation, {
          latitude: doctor.latitude,
          longitude: doctor.longitude,
        });

        return (
          <div key={doctor.name} className="doctor-item">
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Address: {doctor.address}</p>
            <p>Distance: {distance} km</p>
            <button>Book Appointment</button>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorList;

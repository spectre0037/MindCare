import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import './FindDoctor.css';

// Function to calculate the distance using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

const FindDoctor = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  // Predefined doctors object
  const doctorsData = {
    "Dr. Shumaila Batool": {
      country: "Pakistan",
      city: "Lahore",
      email: "info@willingways.org",
      lat: 31.538539,
      lng: 74.336646,
    },
    "Dr. Jahan Ara Rana": {
      country: "Pakistan",
      city: "Karachi",
      email: "info@willingways.org",
      lat: 24.915720,
      lng: 67.059445,
    },
    "Dr. Salman Ahmad Awan": {
      country: "Pakistan",
      city: "Lahore",
      email: "info@willingways.org",
      lat: 31.538539,
      lng: 74.736646,
    },
    "Dr. Mariam Saeed": {
      country: "Pakistan",
      city: "Lahore",
      email: "info@willingways.org",
      lat: 31.538539,
      lng: 73.336641,
    },
    "Dr. Muhammad Zeeshan Iltaf": {
      country: "Pakistan",
      city: "Islamabad",
      email: "info@willingways.org",
      lat: 33.721481,
      lng: 73.043289,
    },
    "Dr. Faizan Raiz": {
      country: "Pakistan",
      city: "Islamabad",
      email: "info@willingways.org",
      lat: 33.721481,
      lng: 73.043289,
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setMapCenter({ lat: latitude, lng: longitude });
        },
        () => {
          alert('Geolocation is not supported or the user denied access.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter doctors based on the search country and city
    const availableDoctors = Object.keys(doctorsData).filter((doctorName) => {
      const doctor = doctorsData[doctorName];
      return (
        doctor.country.toLowerCase() === country.toLowerCase() &&
        doctor.city.toLowerCase() === city.toLowerCase()
      );
    });

    const doctorsWithDistance = availableDoctors.map((doctorName) => {
      const doctor = doctorsData[doctorName];
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        doctor.lat,
        doctor.lng
      );

      // Log the calculated distance
      console.log(`Distance to ${doctorName}: ${distance.toFixed(2)} km`);

      return { ...doctor, name: doctorName, distance };
    });

    setDoctors(doctorsWithDistance);

    if (doctorsWithDistance.length > 0) {
      setMapCenter({ lat: doctorsWithDistance[0].lat, lng: doctorsWithDistance[0].lng });
    } else {
      alert('No doctors found in the specified location.');
    }
  };

  return (
    <div className="doctor-locator">
      <h1 className="text-center">Find a Doctor Near You</h1>
      <form onSubmit={handleSearch}>
        <label>
          Country: <br />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder="Country"
          />
        </label>
        <label>
          City: <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="City"
          />
        </label>
        <center><button type="submit">Search</button></center>
      </form>

      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          id="map"
          center={mapCenter}
          zoom={12}
        >
          {doctors.length > 0 &&
            doctors.map((doc, index) => (
              <Marker
                key={index}
                position={{ lat: doc.lat, lng: doc.lng }}
                onClick={() => setSelectedDoctor(doc)}
              />
            ))}

          {selectedDoctor && (
            <InfoWindow
              position={{ lat: selectedDoctor.lat, lng: selectedDoctor.lng }}
              onCloseClick={() => setSelectedDoctor(null)}
            >
              <div>
                <h4>{selectedDoctor.name}</h4>
                <p>{selectedDoctor.city}, {selectedDoctor.country}</p>
                <p>Distance: {selectedDoctor.distance.toFixed(2)} km</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {doctors.length > 0 && (
        <div className="mt-5">
          <h3 className="text-center">Available Doctors:</h3>
          <ul>
            {doctors.map((doc, index) => (
              <li key={index}>
                <h4>{doc.name}</h4>
                <p>{doc.city}, {doc.country}</p>
                <p>{doc.email}</p>
                <p>Distance: {doc.distance.toFixed(2)} km</p>
                <button className="appointment-btn">
                  <Link to="/book-appointment" state={{ doctor: doc }}>
                    Book Appointment
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FindDoctor;

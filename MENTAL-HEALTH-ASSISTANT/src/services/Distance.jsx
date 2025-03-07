import { getDistance } from 'geolib';

export const calculateDistance = (userLocation, doctorLocation) => {
  const distance = getDistance(userLocation, doctorLocation); // in meters
  return (distance / 1000).toFixed(2); // Convert to kilometers
};

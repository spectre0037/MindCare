import axios from 'axios';

// Function to handle doctor signup
export const doctorSignUp = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/doctors/signup', formData, {
      headers: {
        'Content-Type': 'application/json', // Sending data as JSON
      },
    });
    return response.data; // Return the response data from the server
  } catch (error) {
    console.error('Error in doctor sign-up:', error.response && error.response.data ? error.response.data : error.message);
    throw error; // Propagate the error to the caller
  }
};

import React, { useState } from 'react';
import { doctorSignUp } from '../services/doctorService';
import './DoctorSignUp.css';

const DoctorSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');
    
    try {
      await doctorSignUp(formData);
      setSuccessMessage('Doctor signed up successfully!');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to sign up doctor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doctor-signup-container">
      <h2 className='text-center'>Doctor Sign-Up</h2>
      {error && <p className="error-message text-center">{error}</p>}
      {successMessage && <p className="success-message text-center">{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
        <button className='docto-btn' type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default DoctorSignUp;

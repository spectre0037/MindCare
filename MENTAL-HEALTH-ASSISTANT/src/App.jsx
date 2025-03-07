import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import ChatBot from './Components/Chatbot';
import FindDoctor from './Components/FindDoctor';  // Import the new Find Doctor component
import BookAppointment from './Components/BookApointment';
import DoctorSignUp from './Components/DoctorSignUp';  // Import the Doctor Sign Up component
import Help from './Components/Help';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/ai-assistance" element={<ChatBot />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/doctor-signup" element={<DoctorSignUp />} />  {/* Add Doctor Sign-Up route */}
      </Routes>
    </Router>
  );
}

export default App;

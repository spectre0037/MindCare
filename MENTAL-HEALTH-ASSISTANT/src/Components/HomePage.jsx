import React, { useState, useEffect } from 'react';
import Header from './Header';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import './HomePage.css';
import AboutUs from './AboutUs';
import arrow from '../assets/3227490.png';
import CountryHelplineMenu from './CountryHelpMenu'; // Import the new component
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track the scroll state
  const [scrollY, setScrollY] = useState(0); // Track the scroll position

  // Function to handle the scrolling and arrow rotation
  const handleArrowClick = () => {
    // Scroll the page either up or down
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }); // Scroll down
    }
    setIsScrolled(!isScrolled); // Toggle the scroll state
  };

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  // Calculate opacity based on scroll position
  const opacity = Math.max(1 - scrollY / 300, 0); // Decrease opacity as the user scrolls

  return (
    <>
      <Header />
      {/* Animate the tree div with a fade-in effect */}
      <motion.div
        className='tree'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Animate the info section with a slide-up effect */}
      <motion.div
        className="info"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: opacity }} // Apply dynamic opacity
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        {/* Animate the main heading */}
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }} // Apply dynamic opacity
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to MindCare - Your Mental Health Support Hub
        </motion.h4>

        {/* Animate the subheading */}
        <motion.h5
          className='mt-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }} // Apply dynamic opacity
          transition={{ duration: 1, delay: 1 }}
        >
          Your Path to Better Mental Health Starts Here
        </motion.h5>

        {/* Animate the paragraph with a fade-in and slide-up effect */}
        <motion.p
          className='mt-3 w-75'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: opacity }} // Apply dynamic opacity
          transition={{ duration: 1, delay: 1.5 }}
        >
          At MindCare, we believe that mental health is just as important as physical health. Whether you’re struggling with anxiety, depression, stress, or just looking for guidance, we are here to help. Let us support you on your journey toward well-being.
        </motion.p>

        {/* Animate the 'Get Help' button */}
        <motion.button
          className="get-help-button"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 2 }}
        >
          <Link to="/help" className='text-white'>Get Help</Link>
        </motion.button>
      </motion.div>

      {/* Animate the arrow with rotation */}
      <motion.div
        className="arrow"
        onClick={handleArrowClick} // Handle the click event
        style={{ cursor: 'pointer' }}
        initial={{y:-150}}
        animate={{
          y:0,
          rotate: isScrolled ? 180 : 0, // Rotate by 180 degrees if scrolled down
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={arrow} alt="Scroll Arrow" height={40} />
      </motion.div>

      <div className="bottom">
        <div className="support-section">
          <h3>Need Help? We’re Here for You</h3>
          <p>If you're feeling overwhelmed, don't hesitate to reach out for support. You don't have to face your challenges alone. Our team is here to provide assistance, and there are numerous resources available for mental health support. Here are some of the resources we recommend:</p>
          <ul>
            <li><a className='text-clr' href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">National Helpline for Mental Health Support (1-800-662-HELP)</a></li>
            <li><a className='text-clr' href="https://www.nami.org/Home" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a></li>
            <li><a className='text-clr' href="https://www.mentalhealth.gov/" target="_blank" rel="noopener noreferrer">MentalHealth.gov</a></li>
          </ul>
          <p>Remember, reaching out for help is a sign of strength, not weakness. If you're not sure where to start, our AI Assistant can guide you in the right direction.</p>
        </div>

        {/* Add the helpline dropdown menu at the bottom */}
        <b>Select your country :</b>
        <CountryHelplineMenu />
        <div className="img-2">

        </div>
      </div>
    </>
  );
}

export default HomePage;

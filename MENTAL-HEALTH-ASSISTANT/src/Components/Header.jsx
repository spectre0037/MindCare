import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { motion } from 'framer-motion'; // Import framer-motion for animations
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`navbar fixed-top p-0 m-0 ${isScrolled ? 'ready' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Navbar Section */}
      <div className="left-navbar">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Link to="/about-us" className="navbar-link me-5">
            About Us
          </Link>
          <Link to="/doctor-signup" className="navbar-link">  {/* New Doctor Panel link */}
            Doctor Panel
          </Link>
        </motion.div>
      </div>

      {/* Middle Navbar Section */}
      <div className="middle-navbar p-0 m-0">
        <motion.h4
          className="p-0 m-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="navbar-link">
            MIND CARE
          </Link>
        </motion.h4>
      </div>

      {/* Right Navbar Section */}
      <div className="right-navbar">
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="navbar-links-group"
        >
          <Link to="/ai-assistance" className="navbar-link">
            Get AI Assistance
          </Link>
          <Link to="/find-doctor" className="navbar-link ms-5">
            Get Help From Experts
          </Link>
          
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;

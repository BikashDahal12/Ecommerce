



import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginSignup from './LoginSignup'; // Import LoginSignup component
import './Navbar.css'; // Navbar styles

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginSignup, setShowLoginSignup] = useState(false); // Track modal visibility

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchClick = () => navigate('/search');
  const handleCartClick = () => navigate('/cart');
  const handleUserClick = () => setShowLoginSignup(true); // Open modal

  const closeModal = () => setShowLoginSignup(false); // Close modal

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="hamburger" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">For Him</Link>
          <Link to="/for-her">For Her</Link>
        </nav>

        <Link to="/" className="logo">
          <img
            src="https://www.ktmcty.com/frontend/assets/media/general/logo.webp"
            alt="logo"
          />
        </Link>

        <div className="navbar-center">
          <Link to="/offers">Tihar Offer</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
        </div>

        <div className="navbar-right">
          <button className="icon-btn" onClick={handleSearchClick}>
            <FaSearch className="icon" />
          </button>
          <button className="icon-btn" onClick={handleUserClick}>
            <FaUser className="icon" />
          </button>
          <button className="icon-btn" onClick={handleCartClick}>
            <FaShoppingCart className="icon" />
          </button>
        </div>
      </header>

      {showLoginSignup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <LoginSignup />
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

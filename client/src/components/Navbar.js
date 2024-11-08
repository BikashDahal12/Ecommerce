
import React, { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import axios from 'axios';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/get-product');
      setProducts(data.products);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      navigate(`/search?query=${encodeURIComponent(searchQuery)}`, {
        state: { results: filtered },
      });
    }
  };

  const handleCartClick = () => navigate('/cart');

  const handleUserClick = () => setShowLoginSignup(true);

  const closeModal = () => setShowLoginSignup(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="hamburger" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

      


 {/* <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">Backpacks</Link>
        </nav>  */}

        <Link to="/" className="logo">
          <img
            src="https://www.ktmcty.com/frontend/assets/media/general/logo.webp"
            alt="logo"
          />
        </Link>

        <div className="navbar-center">
          <Link to="/BackPacks">BackPacks</Link>
          <Link to="/Apparels">Apparels</Link>
          <Link to="/TechPack">TechPack</Link>
          
        </div>

        <div className="navbar-right">
          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <button className="icon-btn" onClick={handleSearchClick}>
            <FaSearch className="icon" />
          </button>

          {/* User and Cart Icons */}
          <button className="icon-btn" onClick={handleUserClick}>
            <FaUser className="icon" />
          </button>
          <button className="icon-btn" onClick={handleCartClick}>
            <FaShoppingCart className="icon" />
          </button>
        </div>
      </header>

      {/* Login/Signup Modal */}
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

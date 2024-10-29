
// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer


import ForHerBanner from './components/ForHerBanner';


import axios from 'axios';
import './App.css'; // Import global styles

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch products from API
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/get-product');
      setProducts(data.products);
      setIsLoaded(true);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Router>
      <div className="app-container"> {/* Main Container */}
        <Navbar />

        <ForHerBanner/>

        <div className="content-wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  {/* Offers Section */}
                  <div className="offer">
                    <h4><strong>MONSOON SALE! 20% OFF ON ALL APPARELS</strong></h4>
                  </div>
                  <div className="offer">
                    <h4><strong>This Month we will be contributing 5% of our profits to charity, orphanage, and old age homes.</strong></h4>
                  </div>

                  {/* Product List Section */}
                  <div className={`fullprod ${isLoaded ? 'loaded' : ''}`}>
                    <div className="pcards">
                      {products.map((p, index) => (
                        <div className="pcard" key={index}>
                          <div className="pimg">
                            <img
                              src={p.photo}
                              alt="Product"
                              className="default-photo"
                            />
                            <img
                              src={p.photo1}
                              alt="Product on hover"
                              className="hover-photo"
                            />
                          </div>
                          <div className="pdets">
                            <h4><strong>{p.name}</strong></h4>
                            <p className="priceofdetail">
                              <s>Rs.{p.price + 200}.-</s> <strong>Rs.{p.price}/-</strong>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
            {/* Other Routes */}
            <Route path="ForHer" element={<div>ForHerPage</div>}/>
            
            <Route path="/offers" element={<div>Tihar Offers Page</div>} />
            <Route path="/new-arrivals" element={<div>New Arrivals Page</div>} />
            <Route path="/account" element={<div>My Account Page</div>} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

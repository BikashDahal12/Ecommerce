import React from 'react';
import './TiharOfferBanner.css'; // CSS file for styling the banner

const TiharOfferBanner = () => {
  return (
    <div className="tihar-offer-banner">
      <img 
        src="https://example.com/tihar-banner.jpg" // Replace with actual banner image URL
        alt="Tihar Offer Banner" 
        className="banner-image" 
      />
      <div className="banner-text">
        <h1>Special Tihar Offer!</h1>
        <p>Get up to 50% off on selected items. Celebrate Tihar with style!</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default TiharOfferBanner;

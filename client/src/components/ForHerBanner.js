import React from 'react';
import './ForHerBanner.css'; // CSS file for banner styling

const ForHerBanner = () => {
  return (
    <div className="for-her-banner">
      <img 
        src="https://t4.ftcdn.net/jpg/02/66/14/41/360_F_266144152_zqmMfooqyPv3BAztmO0Hin7FN1DzK8B9.jpg
"                     // Replace with actual banner image URL
        alt="For Her Banner" 
        className="banner-image" 
      />
      <div className="banner-text">
        <h1>Exclusive Collection!</h1>
        <p>Discover our curated selection for Tihar. Embrace elegance and style!</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default ForHerBanner;

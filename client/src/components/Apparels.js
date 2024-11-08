import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Apparels.css'; // Ensure you have the CSS file for styling

function Apparels() {
  const [apparels, setApparels] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch apparel products on component mount
  useEffect(() => {
    const fetchApparels = async () => {
      try {
        const { data } = await axios.get('/api/v1/product/get-product?category=Apparels');
        setApparels(data.products);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching apparels:', error);
      }
    };
    fetchApparels();
  }, []);

  return (
    <div className={`fullprod ${isLoaded ? 'loaded' : ''}`}>
      <h2>Apparels</h2>
      <div className="pcards">
        {apparels.length === 0 ? (
          <p>No apparels found.</p>
        ) : (
          apparels.map((p, index) => (
            <div className="pcard" key={index}>
              <div className="pimg">
                {/* Default image */}
                <img
                  src={p.photo}
                  alt={p.name}
                  className="default-photo"
                />
                {/* Hover image */}
                <img
                  src={p.photo1}
                  alt={`${p.name} on hover`}
                  className="hover-photo"
                />
              </div>
              <div className="pdets">
                <h4>
                  <strong>{p.name}</strong>
                </h4>
                <p className="priceofdetail">
                  <s>Rs.{p.price + 200}.-</s> <strong>Rs.{p.price}/-</strong>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Apparels;

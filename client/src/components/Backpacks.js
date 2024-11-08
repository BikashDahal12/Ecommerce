
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Backpacks.css';

function Backpacks() {
  const [backpacks, setBackpacks] = useState([]);

  useEffect(() => {
    const fetchBackpacks = async () => {
      try {
        const { data } = await axios.get('/api/v1/product/get-product?category=Backpacks');
        setBackpacks(data.products);
      } catch (error) {
        console.error('Error fetching backpacks:', error);
      }
    };
    fetchBackpacks();
  }, []);

  return (
    <div className="backpacks-container">
      <h2>Backpacks</h2>
      <div className="pcards">
        {backpacks.map((product, index) => (
          <div className="pcard" key={index}>
            <div className="pimg">
              <img
                src={product.photo}
                alt={product.name}
                className="default-photo"
              />
              <img
                src={product.photo1}
                alt={`${product.name} on hover`}
                className="hover-photo"
              />
            </div>
            <div className="pdets">
              <h4>{product.name}</h4>
              <p>
                <s>Rs.{product.price + 200}</s> <strong>Rs.{product.price}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Backpacks;

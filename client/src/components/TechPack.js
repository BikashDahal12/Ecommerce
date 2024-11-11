import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TechPack.css'; 

function TechPack() {
  const [techPacks, setTechPacks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTechPacks = async () => {
      try {
        const { data } = await axios.get('/api/v1/product/get-product?category=TechPack');
        setTechPacks(data.products);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching tech packs:', error);
      }
    };
    fetchTechPacks();
  }, []);

  return (
    <div className="techpack-container">
      <h2>TechPack</h2>
      <div className={`fullprod ${isLoaded ? "loaded" : ""}`}>
        <div className="pcards">
          {techPacks.map((product) => (
            <div className="pcard" key={product._id}>
              <div className="pimg">
                <img
                  src={product.photo}
                  alt="Product"
                  className="default-photo"
                />
                <img
                  src={product.photo1}
                  alt="Product on hover"
                  className="hover-photo"
                />
              </div>
              <div className="pdets">
                <h4>
                  <strong>{product.name}</strong>
                </h4>
                <p className="priceofdetail">
                  <s>Rs.{product.price + 200}.-</s>{" "}
                  <strong>Rs.{product.price}/-</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechPack;

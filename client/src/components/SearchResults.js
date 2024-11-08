
import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <div className="pcards">
          {results.map((product, index) => (
            <div className="pcard" key={index}>
              <div className="pimg">
                {/* Display default image and hover image */}
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
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default SearchResults;

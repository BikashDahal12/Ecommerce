// ProductList.js
import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products, isLoaded }) => {
  const [sortOption, setSortOption] = useState("default");

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "name-asc" && a.name && b.name) {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "name-desc" && a.name && b.name) {
      return b.name.localeCompare(a.name);
    } else if (sortOption === "price-asc" && a.price !== undefined && b.price !== undefined) {
      return a.price - b.price;
    } else if (sortOption === "price-desc" && a.price !== undefined && b.price !== undefined) {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="product-list">
      <div className="sort-container">
        <label htmlFor="sort">Sort Products: </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="name-asc">Sort by Name (A-Z)</option>
          <option value="name-desc">Sort by Name (Z-A)</option>
          <option value="price-asc">Sort by Price (Low to High)</option>
          <option value="price-desc">Sort by Price (High to Low)</option>
        </select>
      </div>

      <div className={`fullprod ${isLoaded ? "loaded" : ""}`}>
        <div className="pcards">
          {sortedProducts.map((p, index) => (
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
                <h4>
                  <strong>{p.name}</strong>
                </h4>
                <p className="priceofdetail">
                  <s>Rs.{p.price + 200}.-</s> <strong>Rs.{p.price}/-</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

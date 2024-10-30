
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForHerBanner from "./components/ForHerBanner";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortOption, setSortOption] = useState("default");

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
      setIsLoaded(true);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
    <Router>
      <div className="app-container">
        <Navbar />
        <ForHerBanner />

        <div className="content-wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <div className="offer">
                    <h4>
                      <strong>MONSOON SALE! 20% OFF ON ALL APPARELS</strong>
                    </h4>
                  </div>
                  <div className="offer">
                    <h4>
                      <strong>
                        This Month we will be contributing 5% of our profits to
                        charity, orphanage, and old age homes.
                      </strong>
                    </h4>
                  </div>

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
                              <s>Rs.{p.price + 200}.-</s>{" "}
                              <strong>Rs.{p.price}/-</strong>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/ForHer" element={<div>For Her Page</div>} />
            <Route path="/account" element={<div>My Account Page</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




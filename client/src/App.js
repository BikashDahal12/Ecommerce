
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";

import SearchResults from './components/SearchResults';


import Backpacks from "./components/Backpacks";
import Apparels from "./components/Apparels";
import TechPack from "./components/TechPack";

import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
  

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Banner />

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
                    <h1>
                      <strong>Products</strong>
                    </h1>
                  </div>

                  {/* Use ProductList component */}
                  <ProductList products={products} isLoaded={isLoaded} />
                </div>
              }
            />
            <Route path="/Banner" element={<div>Banner Page</div>} />
            <Route path="/account" element={<div>My Account Page</div>} />

            <Route path="/search" element={<SearchResults />} />


            <Route path="/BackPacks" element={<Backpacks />} />
            <Route path="/Apparels" element={<Apparels />} />
            <Route path="/TechPack" element={<TechPack />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

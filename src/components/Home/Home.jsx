import React, { useState, useEffect } from "react";
import Category from "../Category/Category";
import Banner from "../Home/Banner/Banner.jsx";
import Products from "../Products/Products.jsx";
import { categories, productsByCategory } from "../Products/data.js";

import "./Home.scss";

const Home = () => {
  // Get all products from the productsByCategory object
  const allProducts = Object.values(productsByCategory).flat();

  return (
    <div>
      <Banner />

      <div className="main-content">
        {/* Display all categories with their respective products */}
        <div className="cf-title-01">
          <h2>Popular Products</h2>
        </div>
        {categories.map((category) => (
          <div key={category.id}>
            {/* <div className="category-title">{category.name}</div> */}
            <Products categoryId={category.id} products={productsByCategory[category.id]} headingText={`Products for ${category.name}`} />
          </div>
        ))}

        

        {/* Display all products on the home page */}
        <Products products={allProducts} headingText="Popular Products" />
      </div>
    </div>
  );
};

export default Home;

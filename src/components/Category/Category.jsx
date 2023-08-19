import React, { useState, useEffect } from "react";
import Loader from "../loader/Loader.jsx";
import { useParams } from "react-router-dom";
import { fetchCategoryData } from "../../utils/apiCategory.js";
import { fetchProductData } from "../../utils/apiProduct.js"; // Import the API function for fetching products
import "./Category.scss"; // Import file CSS của trang
import { Link } from "react-router-dom";
const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // State to store products
  const { id } = useParams(); // Lấy giá trị tham số id từ URL

  useEffect(() => {
    fetchCategories();
    fetchProductsByCategory(); // Fetch products by category
  }, [id]); // Sử dụng id trong dependency array để tái-fetch khi thay đổi id

  const fetchCategories = async () => {
    try {
      const categoryResponse = await fetchCategoryData();
      const filteredCategories = categoryResponse.data.items.filter(
        (category) => category.fields.type === id
      );
      setCategories(filteredCategories);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProductsByCategory = async () => {
    try {
      const productResponse = await fetchProductData();
      const data = productResponse.data;
      const filteredProducts = data.items.filter(
        (product) => product.fields.productsByCategory === id
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="category-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id} className="category-title">
                <h3 className="category-name">{category.fields.type}</h3>
              </li>
            ))}
          </ul>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.fields.imageSrc.link}
                  alt={product.fields.ProductName}
                  className="product-image"
                  width="200"
                  height="200"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    width: "100%",
                    height: "auto",
                  }}
                />
                <h3 className="product-name">
                  <h3 className="product-name">
                    <Link
                      to={`/product/${id}/${product.id}`}
                      title={product.fields.ProductName}
                    >
                      {product.fields.ProductName}
                    </Link>
                  </h3>
                </h3>
                <p className="product-price">{`£${product.fields.price}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;

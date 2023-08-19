import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import { fetchProductData } from "../../utils/apiProduct"; // Import your API function here

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductData();
        const data = response.data;
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.fields.imageSrc.link}
              width="200"
              height="200"
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                width: "100%",
                height: "auto",
              }}
              alt={product.fields.ProductName}
            />
            <div className="product-details">
              <h3>
                <span className="product-name">
                  <Link
                    to={`/product/${product.fields.productsByCategory}/${product.id}`}
                    title={product.fields.ProductName}
                  >
                    {product.fields.ProductName}
                  </Link>
                </span>
              </h3>
              <p className="product-price">{`£${product.fields.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

// Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ products, headingText }) => {
  return (
    <div>
      <div className="cf-title-01">
        <h2>{headingText}</h2>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-loop-item" key={product.id}>
            <img
              src={product.imageSrc}
              width="200"
              height="200"
              alt={product.label}
            />
            <div className="product-loop-details">
              <h3>
                <span className="prti">
                  <Link
                    to={`/category/${product.categoryId}/product/${product.id}`}
                    title={product.label}
                  >
                    {product.label}
                  </Link>
                </span>
              </h3>
              <div className="product-loop-action">
                <p>
                  <font className="list_price">{`£${product.price}`}</font>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

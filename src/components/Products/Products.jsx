import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import { productsByCategory } from "../Products/data.js";
import ProductDetail from "./ProductDetail";

const Products = ({ innerPage, categoryId }) => {
  // Get the products based on the categoryId
  const products = productsByCategory[categoryId] || [];

  return (
    <div>
      <table className="product-table">
        <tbody>
          <tr>
            {products.map((product) => (
              <td key={product.id}>
                <div className="product-loop-item">
                  <img
                    src={product.imageSrc}
                    width="200"
                    height="200"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      width: "100%",
                      height: "auto",
                    }}
                    alt={product.label}
                  />
                  <div className="product-loop-details">
                    <h3 className="first">
                      <span
                        className="prti"
                        style={{ height: "42px", padding: "0px" }}
                      >
                        {/* Use Link component to navigate to the ProductDetail page */}
                        <Link to={`/product/${categoryId}/${product.id}`} title={product.label}>
                          {product.label}
                        </Link>
                      </span>
                    </h3>
                    <div className="product-loop-action">
                      <p className="last">
                        <font className="list_price">{`£${product.price}`}</font>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;

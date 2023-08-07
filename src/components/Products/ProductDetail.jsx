import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { productsByCategory } from "../Products/data.js";
import "./ProductDetail.scss"; // Import your custom CSS file for ProductDetail
import ProductSingleAction from '../Products/ProductSingleAction';
import React, { useState} from "react";
const ProductDetail = () => {
  // Lấy thông tin categoryId và productId từ URL
  const { categoryId, productId } = useParams();
  const [showCart, setShowCart] = useState(false);
  

  const handleShowCart = () => {
    setShowCart(true);
  };
  
  // Tìm sản phẩm dựa vào categoryId và productId từ URL
  const product = productsByCategory[categoryId]?.find((item) => item.id.toString() === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    
    <div className="product-detail-container">
      <div><h1>{product.label}</h1></div>
      
      <div className="product-detail-image">
        <img src={product.imageSrc} alt={product.label} />
        
        <ProductSingleAction product={product} setShowCart={setShowCart} />

      {/* Show the Cart component if showCart is true */}
      {showCart && <Cart setShowCart={setShowCart} />}

        
      </div>
      
      <div className="product-detail-content">
        
        
        <div className="product-detail-link">
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            View Product
          </a>
        </div>
        

        <div className="product-detail-description">
          <p>{product.description}</p>
        </div>
          {/* Add more description paragraphs as needed */}
        
        <div className="product-detail-features">
          <h2>Key Features:</h2>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
         <div className="product-detail-package-contents">
          <h2>Package Contents:</h2>
          <ul>
            <li>Jabra Evolve Bluetooth Headset</li>
            <li>Carry Pouch</li>
            <li>Jabra USB-A Wireless Bluetooth Adapter</li>
            <li>USB-A charging cable</li>
          </ul>
        </div> 
        <div className="product-detail-additional-info">
          <h2>Additional Information</h2>
          <table className="product-attributes-table">
            <tbody>
              {product.additionalInformation.map(({ label, value }, index) => (
                <tr key={index}>
                  <th className="product-attribute-title">{label}</th>
                  <td className="product-attribute-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;

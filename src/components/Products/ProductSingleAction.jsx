import React, { useState } from "react";
import "./ProductSingleAction.scss"; // Import CSS file
import { productsByCategory } from "../Products/data.js";

const ProductSingleAction = ({ product }) => {
  const [labelText, setLabelText] = useState("Add Headset Carry Bag");
  const [quantity, setQuantity] = useState(1); // Khởi tạo trạng thái quantity với giá trị 1

  const handleChangeField = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "327") {
      setLabelText("Add Headset Carry Bag");
    } else if (selectedValue === "326") {
      setLabelText("Include Headset Carry Bag - (Quick Code: 15154): + £3.95");
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToBasket = () => {
    // Thay thế phần này bằng logic thực tế để thêm sản phẩm vào giỏ hàng
    console.log("Product added to the basket");
    // Thêm code của bạn vào đây để xử lý việc thêm sản phẩm vào giỏ hàng
  };

  return (
    <div className="product-single-action">
      <div className="product-single-options">
        <div className="product-single-price">£{product.price}</div>
        <table className="options m_form">
          <tbody>
            <tr>
              <td>
                <div className="form_label">
                  <b style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>
                    <label htmlFor="additionv_97">{labelText}</label>
                  </b>
                </div>
                <select
                  name="additionv[97]"
                  id="additionv_97"
                  className="custom-select"
                  onChange={handleChangeField}
                  data-gtm-form-interact-field-id="0"
                  style={{
                    width: "200px",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    borderColor: "#ccc",
                    backgroundColor: "#fff",
                    color: "#333",
                  }}
                >
                  <option selected="" value="">
                    Select:
                  </option>
                  <option value="327">I Do Not Require A Headset Bag</option>
                  <option value="326">
                    Include Headset Carry Bag - (Quick Code: 15154): + £3.95
                  </option>
                </select>
                <input type="hidden" name="additions[97]" value="1" />
                <input type="hidden" name="additiono[97]" value="1" />
                <input type="hidden" name="addition[97]" value="1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="product-single-add d-flex">
        <table cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="button b_basket">
                <span
                  className="quantity-btn decrease-btn"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </span>
                <input
                  type="text"
                  name="quantity"
                  id="pquantity"
                  className="pquantity"
                  value={quantity} // Sử dụng biến quantity cho giá trị của input
                  aria-label="Qty"
                />
                <span
                  className="quantity-btn increase-btn"
                  onClick={handleIncreaseQuantity}
                >
                  +
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        type="submit"
        className="button b_basket"
        onClick={() => {
          const formDetails = new FormData(
            document.querySelector('form[name="details"]')
          );
          formDetails.append("addajax", "1");
          const serializedForm = new URLSearchParams(formDetails).toString();
          handleAddToBasket(serializedForm);
        }}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default ProductSingleAction;

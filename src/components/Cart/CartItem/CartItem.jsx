import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext } from "react";
import { CreatedContext } from "../../../utils/Context";

const CartItem = () => {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(CreatedContext);

  return (
    <div className="cart-products">
      {/* here i will start looping the data using map */}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            {/* don;t need it now because i can fetch the data from url */}
            {/* process.env.REACT_APP_DEV_URL + */}
            <img
              src={item.attributes.img.data[0].attributes.url}
              alt="cart-product"
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />

            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377; {item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;

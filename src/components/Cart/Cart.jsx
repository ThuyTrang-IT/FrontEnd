import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem.jsx";
import { useContext } from "react";
import { CreatedContext } from "../../utils/Context";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  let { cartSubTotal, cartItems } = useContext(CreatedContext);

  // * here i Will create instance for load stripe and use publishable key there
  const stripePromise = loadStripe(
    `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
  );

  // ! this is the function for stripe checkout page

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {cartSubTotal === 0 ? (
          <>
            {/* here I am going to add empty cart */}
            <div className="empty-card">
              <BsCartX />
              <span>No Product In The Cart.</span>
              <button className="return-cta" onClick={() => setShowCart(false)}>
                {" "}
                RETURN TO SHOP
              </button>
            </div>
          </>
        ) : (
          // * this is the case when products has been added into the cart
          <>
            {/* here i will make cart Footer here */}
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">SubTotal:</span>
                <span className="total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

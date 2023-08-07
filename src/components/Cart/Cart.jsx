// Cart.jsx
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { CreatedContext } from "../../utils/Context";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
import CartItem from "../Cart/CartItem/CartItem";

// Import Tailwind CSS
import "tailwindcss/tailwind.css";
import "../Cart/Cart.scss";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(CreatedContext);
  
  const stripePromise = loadStripe(
    `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
  );

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
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };


  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header bg-gray-200 p-3 flex justify-between items-center">
          <span className="heading text-lg">Shopping Cart</span>
          <span
            className="close-btn flex items-center text-gray-500"
            onClick={() => setShowCart(false)}
          >
            <span className="text">Close</span>
            <MdClose />
          </span>
        </div>

        {cartSubTotal === 0 ? (
          <div className="empty-card">
            <BsCartX />
            <span>No Product In The Cart.</span>
            <button
              className="return-cta btn btn-primary"
              onClick={() => setShowCart(false)}
            >
              RETURN TO SHOP
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}

            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">SubTotal:</span>
                <span
                  className="total"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  £{cartSubTotal}
                </span>
              </div>
              <div className="button">
                <button onClick={handleCheckout} className="checkout-cta">
                  Checkout
                </button>
                <button
                  className="continue-shopping-btn btn btn-primary"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
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

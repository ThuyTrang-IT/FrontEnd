import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// here first i will create context

export const CreatedContext = createContext(null);

// create provider here

const AppContext = (props) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  // * here we will create state for cart functionality
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  // * it will scroll to the top whenever we change location
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems.map((c) => (count += c.attributes.quantity));
    // * here we will update the cartCount value inside the setCartCount state
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartCount, cartItems]);

  const handleAddToCart = (product, quantity) => {
    // * here first i will add all the cartItems in array
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    const items = [...cartItems];
    const index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      else {
        items[index].attributes.quantity -= 1;
      }
    }
    setCartItems(items);
  };

  return (
    <>
      <CreatedContext.Provider
        value={{
          categories,
          setCategories,
          products,
          setProducts,
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
          cartSubTotal,
          setCartSubTotal,
          handleAddToCart,
          handleRemoveFromCart,
          handleCartProductQuantity,
        }}
      >
        {props.children}
      </CreatedContext.Provider>
    </>
  );
};

export default AppContext;

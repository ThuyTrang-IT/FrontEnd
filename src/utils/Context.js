import React, { createContext, useEffect, useState } from "react";
import { productsByCategory } from "../components/Products/data"; // Import dữ liệu sản phẩm từ file data.js

// Tạo context
export const CreatedContext = createContext(null);

const AppContext = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    // Đặt dữ liệu danh mục vào state
    setCategories([
      { id: "wireless-pc-headsets", name: "Headsets for PC's" },
      { id: "usb-pc-headsets", name: "Headsets for PC's" },
      { id: "yealink-headsets", name: "Headsets for Phone" },
      { id: "poly-handsets", name: "Headsets for Phone" },
      { id: "wireless-headsets", name: "Headsets by Type" },
      { id: "corded-qd-headsets", name: "Headsets by Type" },
    ]);

    // Tạo object mới chứa tất cả sản phẩm từ productsByCategory
    const allProducts = {};
    Object.keys(productsByCategory).forEach((categoryId) => {
      allProducts[categoryId] = [...productsByCategory[categoryId]];
    });

    // Đặt dữ liệu sản phẩm vào state
    setProducts(allProducts);
  }, []);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.forEach(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cần cập nhật số lượng
      const updatedItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, attributes: { ...item.attributes, quantity: item.attributes.quantity + product.attributes.quantity } }
          : item
      );
      setCartItems(updatedItems);
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
      setCartItems([...cartItems, product]);
    }
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
      if (items[index].attributes.quantity === 1) {
        // Nếu số lượng là 1 và người dùng giảm xuống, loại bỏ mặt hàng khỏi giỏ hàng
        items.splice(index, 1);
      } else {
        items[index].attributes.quantity -= 1;
      }
    }
  
    setCartItems(items);
  };
  

  return (
    <CreatedContext.Provider
      value={{
        categories,
        products,
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
  );
};

export default AppContext;

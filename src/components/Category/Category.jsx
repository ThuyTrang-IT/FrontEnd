import React, { useState, useEffect } from "react";
import Products from "../Products/Products.jsx";
import { useParams } from "react-router-dom";
import "../Category/Category.scss";
import { categories, productsByCategory } from "../Products/data.js";
import Loader from "../loader/Loader.jsx";

const Category = () => {
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  // Tìm thông tin danh mục dựa vào id từ URL
  const category = categories.find((cat) => cat.id === id);

  useEffect(() => {
    if (category === undefined) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [category]);

  return (
    <div className="category-main-layout">
      <div className="layout">
        {load ? (
          <Loader />
        ) : (
          <>
            {/* Hiển thị tên danh mục */}
            <div className="category-title">
              {category.name}
            </div>
            <div className="product">
            {/* Hiển thị danh sách sản phẩm trong danh mục */}
            <Products innerPage={true} categoryId={id} allProducts={productsByCategory[id]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;

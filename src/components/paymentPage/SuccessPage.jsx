import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>your Payment got successful...</h1>
      <button
        style={{
          marginTop: "20px",
          border: "1px solid black",
          padding: "10px",
          background: "#8e2de2",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        GO TO PRODUCTS..
      </button>
    </div>
  );
};

export default SuccessPage;

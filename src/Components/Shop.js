import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center min-h-[80vh] items-center">
      <div>
        <h2 className=" text-2xl text-white font-bold mb-5">
          Welcome to you in <span className=" text-secondary">Shop List</span>{" "}
          App
        </h2>
        <button
          onClick={() => navigate("/shop-list")}
          className=" btn btn-accent px-10 "
        >
          Let's Dive In
        </button>
      </div>
    </div>
  );
};

export default Shop;

// import React, { useState } from "react";
import React from "react";
import { Order } from "./Components/Order";

const Restaurant = () => {
  
  return (
    <div className="Restaurant-div">
      <h3>Restaurant Orders</h3>
      <ul className="Orders-list">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate Cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;

// import React, { useState } from "react";
import React from "react";
import { Order } from "./Components/Order";

const Restaurant = () => {
  
  return (
    <div className="Restaurant-div">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"}/>
      </ul>
    </div>
  );
};

export default Restaurant;

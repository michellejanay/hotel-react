// import React, { useState } from "react";
import React from "react";
import { useState } from "react";
import AddButton from "./Components/AddButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0)

  const orderOne = () => {
    setOrders(pizza => pizza + 1);
  }
  return (
    <div className="Restaurant-div">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <AddButton addAPizza={orderOne}/>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

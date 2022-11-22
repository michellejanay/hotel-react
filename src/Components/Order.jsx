import React from 'react'
import { useState } from 'react';
import AddButton from './AddButton';

export const Order = (prop) => {
    const [orders, setOrders] = useState(0);

    const order = () => {
      setOrders((item) => item + 1);
    };

  return (
      <li>
        {prop.orderType}: {orders} <AddButton addAPizza={order} />
      </li>
  );
}

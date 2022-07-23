import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";


const Cart = () => {
  const [preciototal, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.precio);
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <>
            <li>{item.tipo}</li>
            <li>{item.precio}</li>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`Your total is: $${preciototal}`}</h1>
    </>
  );
};

export default Cart;
import { useEffect, useState } from "react";
import axios from "axios";

function ShoppingCart({ changeView }) {

  const [cartItems, setCartItems] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3001/api/cart")
      .then(response => {
        setCartItems(response.data);
      });
  }, []);

  return (
    <>
        {
          cartItems.map(item => {
            return <li key = {item.id}>Item ID: {item.id} Item Quantity: {item.quantity}</li>
          })
        }
      <button onClick = { changeView }>View Products</button>
    </>
  )  
}

export {ShoppingCart}
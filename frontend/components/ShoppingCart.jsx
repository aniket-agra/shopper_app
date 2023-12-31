import { useEffect, useState } from "react";
import { getCart } from "../services/productServices";

function CartItemCard( { cartItem }) {
  return (
    <>
      <p>Product Name: {cartItem.title}</p>
      <p>Product Price: {cartItem.price}</p>
      <p>Quantity Ordered: {cartItem.quantity}</p>
    </>
  );  
}

function ShoppingCart({ changeView }) {

  const [cartItems, setCartItems] = useState([]);
  useEffect(
    function () {
      getCart().then(data => setCartItems(data));
    }, []
  );

  return (
    <>
        {
          cartItems.map(item => {
            return <CartItemCard key = {item.id} cartItem = { item } />
          })
        }
      <p>
        Cart Total: {
          cartItems.reduce((accumulator, currentElement) => {
            let itemPrice = currentElement.price;
            itemPrice = Number(itemPrice.substring(0, itemPrice.length - 1));
            return accumulator + (itemPrice * Number(currentElement.quantity));
          }, 0)
        }
      </p>
      <button onClick = { changeView }>View Products</button>
    </>
  )  
}

export {ShoppingCart}
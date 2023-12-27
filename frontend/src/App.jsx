/* eslint-disable react/prop-types */
import { useState } from "react";

let data = [
  {
    id : 1,
    title : "Lectures on Physics",
    details : "Richard Feynman talks about classical physics",
    price: "100$"
  },
  {
    id : 2,
    title : "Relativity: The special and general theory",
    details : "Albert Einstein talks about relativity",
    price : "20$"
  },
  {
    id : 3,
    title : "The large-scale structure of spacetime",
    details : "Hawking and Penrose talk about spacetime",
    price : "50$"
  }
];

function ProductCard({ productData, addToCart }) {
  console.log(productData);
  const [quantity, setQuantity] = useState(0);

  function updateQuantity(e) {
    setQuantity(e.target.value);
  }
  return (
    <div>
      <h2>{productData.title}</h2>
      <h3>{productData.details}</h3>
      <p>Price: {productData.price}</p>
      <label>Quantity: </label>
      <input 
        type = "number"
        value = {quantity}
        onChange = {updateQuantity}
      />
      <button onClick = {() => {
        addToCart(productData.id, quantity);
        setQuantity(0);
      }}>Add to cart</button>

    </div>
  )
}

function ShoppingCart() {

  const [quantities, setQuantities] = useState({});

  console.log(quantities);

  const addToCart = function (id, addQuantity) {
    let newQuantities = {...quantities};
    newQuantities[id] = addQuantity;
    setQuantities(newQuantities);
  }

  return (
    <>
      {
        data.map(
          product => <ProductCard productData = {product} addToCart = {addToCart} key = {product.id}/>
        )
      }
    </>
  )
}

export default ShoppingCart 
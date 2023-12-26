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

function ProductCard({ productData, orderedQuantity, updateQuantity, addToCart }) {
  console.log(productData);
  return (
    <div>
      <h2>{productData.title}</h2>
      <h3>{productData.details}</h3>
      <p>Price: {productData.price}</p>
      <label>Quantity: </label>
      <input 
        type = "number"
        value = {orderedQuantity}
        onChange = {updateQuantity}
      />
      <button onClick = {() => addToCart(productData.id)}>Add to cart</button>

    </div>
  )
}

function ShoppingCart() {

  const [quantity, setQuantity] = useState(0);
  const [quantities, setQuantities] = useState({});

  console.log(quantities);

  const updateQuantity = function (e) {
    setQuantity(e.target.value);
  }

  const addToCart = function (id) {
    let newQuantities = {...quantities};
    newQuantities[id] = quantity;
    setQuantities(newQuantities);
  }

  return (
    <>
      <ProductCard 
        productData = {data[1]} 
        orderedQuantity = {quantity} 
        updateQuantity = {updateQuantity}
        addToCart = {addToCart}
      />
    </>
  )
}

export default ShoppingCart 
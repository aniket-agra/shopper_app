import { useState } from "react";

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

  export {ProductCard};
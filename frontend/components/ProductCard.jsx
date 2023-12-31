import { useState } from "react";
import { addItemToCart } from "../services/productServices";

function ProductCard({ productData }) {
    console.log(productData);
    const [quantity, setQuantity] = useState(0);
  
    function updateQuantity(e) {
      setQuantity(e.target.value);
    }

    function addToCart() {
      const newOrder = {
        id : productData.id,
        quantity : quantity
      };

      addItemToCart(newOrder)
        .then(setQuantity(0));
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
        <button onClick = { addToCart }>Add to cart</button>
      </div>
    )
  }

  export {ProductCard};
import { useState } from "react";
import { ProductCard } from "./ProductCard";

function ShoppingCart( { data }) {
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

export {ShoppingCart}
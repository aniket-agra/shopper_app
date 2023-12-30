import { useEffect } from "react";

function ShoppingCart({ changeView }) {
    
    return (
      <>
        <button onClick = { changeView }>View Products</button>
      </>
    )
}

export {ShoppingCart}
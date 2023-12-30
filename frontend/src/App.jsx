import { ShoppingCart } from "../components/ShoppingCart";
import { ProductList } from "../components/ProductList";
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

function App () {

  const [viewList, setViewList] = useState(true);

  const viewCart = function () {
    setViewList(!viewList);
  }

  if (viewList) {
    return (
      <>
        <ProductList switchToCart = { viewCart }/>
      </>
    )
  }
  else {
    return (
      <>
        <ShoppingCart switchToCart = { viewCart }/>  
      </>
    )
  }
  
}

export {App};
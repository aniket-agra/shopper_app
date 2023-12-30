import { ShoppingCart } from "../components/ShoppingCart";
import { ProductList } from "../components/ProductList";
import { useState } from "react";

function App () {

  const [viewList, setViewList] = useState(true);

  const changeView = function () {
    setViewList(!viewList);
  }

  if (viewList) {
    return (
      <>
        <ProductList changeView = { changeView }/>
      </>
    )
  }
  else {
    return (
      <>
        <ShoppingCart changeView = { changeView }/>  
      </>
    )
  }
  
}

export {App};
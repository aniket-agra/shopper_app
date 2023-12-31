import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productServices";

function ProductList({ changeView }) {
    const [products, setProducts] = useState([]);

    useEffect(
        function () {
            getAllProducts().then(data => setProducts(data));
        }, []
    );

    return (
        <div>
            {
                products.map(product => 
                    <ProductCard productData = {product} key = {product.id} />
                )
            }
            <button onClick = {changeView}>View Cart</button>
        </div>
    )
}

export { ProductList };
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(
        function () {
            axios
                .get("http://localhost:3001/api/products")
                .then(response => setProducts(response.data));
        }, []
    );

    return (
        <div>
            {
                products.map(product => <li key = {product.id}>
                    <ProductCard productData = {product} addToCart = { () => console.log(product)} />
                </li>)
            }
        </div>
    )
}

export { ProductList };
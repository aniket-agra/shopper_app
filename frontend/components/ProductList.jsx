import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";

function ProductList() {
    useEffect(
        function () {
            axios
                .get("http://localhost:3001/api/products")
                .then(data => console.log(data));
        }, []
    );
}

export { ProductList };
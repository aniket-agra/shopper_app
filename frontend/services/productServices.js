import axios from "axios";

const baseUrl = "/api";

function getAllProducts() {
return axios
        .get(`${baseUrl}/products`)
        .then(response => response.data);
}

function getCart() {
    return axios    
            .get(`${baseUrl}/cart`)
            .then(response => response.data);
}

function addItemToCart(details) {
    return axios
            .post(`${baseUrl}/cart`, details)
            .then(response => response.data);
}

export { getAllProducts, getCart, addItemToCart };
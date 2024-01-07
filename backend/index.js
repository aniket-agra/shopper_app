require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Product = require("./models/product");

const app = express();

app.use(express.json());
app.use(express.static("dist"));
app.use(cors());

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

let shoppingCart = [];

app.get("/api/products", function (request, response) {
  Product.find({}).then(result => {
    response.json(result);
  });
})

app.get("/api/cart", (request, response) => {
  let responseData = shoppingCart.map(item => {
    let dataItem = data.filter(element => element.id === item.id);
    let responseItem = {};
    responseItem["title"] = dataItem[0].title;
    responseItem["price"] = dataItem[0].price;
    responseItem["id"] = dataItem[0].id;
    responseItem["quantity"] = item.quantity;
    return responseItem;
  });
  response.json(responseData);
})

app.post("/api/cart", (request, response) => {
  const addedProduct = request.body;
  shoppingCart = shoppingCart.concat(addedProduct);
  response.json(shoppingCart);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`running server on port ${PORT}`));
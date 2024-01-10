require("dotenv").config();
const Product = require("./models/product");
const CartItem = require("./models/cart");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.static("dist"));
app.use(cors());

app.get("/api/products", function (request, response) {
  Product.find({}).then(result => {
    response.json(result);
  });
})

app.get("/api/cart", (request, response) => {
  CartItem.find({}).then(result => {
    console.log(result);
    // let responseData = result.map(resultItem => {
    //   Product.findById(resultItem.productId).then(product => {
    //     console.log(product);
    //     let responseItem = {
    //       "title" : product.title,
    //       "price" : product.price,
    //       "id" : product.id,
    //       "quantity" : resultItem.quantity
    //     };
    //     return responseItem;
    //   });
    // });
    response.json(responseData);
  });
})

app.post("/api/cart", (request, response) => {
  const addedProduct = request.body;
  let newItem = new CartItem({
    productId : addedProduct.id,
    quantity : addedProduct.quantity
  });
  newItem.save().then(result => {
    response.json(result);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`running server on port ${PORT}`));
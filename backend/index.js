const express = require("express");
const app = express();

app.use(express.json());

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

app.get("/api/products", (request, response) => {
    response.json(data);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`running server on port ${PORT}`));

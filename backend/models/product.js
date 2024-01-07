const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);

mongoose.connect(url)
    .then(result => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("error connecting to MongoDB", error.message);
    });

const productSchema = new mongoose.Schema({
    title : String,
    details : String,
    price : String
});

productSchema.set("toJSON", {
    transform : (document, returnedObject) => {
        returnedObject.id = document._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("Product", productSchema); 
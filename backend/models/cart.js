const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

mongoose.connect(url)
            .then(result => {
                console.log("connected to mongoDB");
            })
            .catch(error => {
                console.log("error connecting to mongoDB", error.message);
            });

const cartSchema = new mongoose.Schema({
    productId : String,
    quantity : String
});

cartSchema.set("toJSON", {
    transform : (document, returnedObject) => {
        returnedObject.id = document._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("Cart", cartSchema);
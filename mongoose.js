const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
    .connect(
        "mongodb+srv://saubanh05062001:w2f9JPgONIOn6idn@mern-stack.qaiddcb.mongodb.net/product_test?retryWrites=true&w=majority"
    )
    .then(console.log("Connected to database!"))
    .catch((err) => console.error(err));

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    });
    const result = await createdProduct.save();
    res.json(result);
};

exports.createProduct = createProduct;

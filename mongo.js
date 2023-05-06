const mongoClient = require("mongodb").MongoClient;

const url =
    "mongodb+srv://saubanh05062001:w2f9JPgONIOn6idn@mern-stack.qaiddcb.mongodb.net/product_test?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    const client = new mongoClient(url);
    try {
        await client.connect();
        const db = client.db("products_test");
        const result = await db.collection("products").insertOne(newProduct);
    } catch (error) {
        console.log(error);
        return res.json({ message: "Could not store data" });
    }
    client.close();
    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client = new mongoClient(url);
    let products;
    try {
        await client.connect();
        const db = client.db("products_test");
        products = await db.collection("products").find().toArray();
        // const result = await db.collection("products").insertOne(newProduct);
    } catch (error) {
        console.log(error);
        return res.json({ message: "Could not store data" });
    }
    client.close();
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;

const path = require('path')

// returning a html file with the help of res.sendFile and path function which is already built in in node js when we do npm install it installs automatically.

const getProducts = (req,res) =>{
    res.sendFile(path.join(__dirname, "..", "view",'product.html'))
};

const getProductsById = (req,res)=>{
    const id = req.params.id
    res.send(`Fetching product with ID: ${id}`);
}

const postProduct = (req,res)=>{
    res.send("Adding a new product");
};

const putProduct = (req,res)=>{
    res.send("put request called.");
}

const deleteProductById = (req,res)=>{
    res.send("delete request called.");
}
module.exports = {
    getProducts,
    getProductsById,
    postProduct,
    putProduct,
    deleteProductById
}

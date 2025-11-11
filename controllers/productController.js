const path = require('path');

//  GET ALL PRODUCTS → Return HTML Form
const getProducts = (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "view", "product.html");
        return res.status(200).sendFile(filePath);
    } catch (error) {
        console.error(" Error sending HTML file:", error.message);
        return res.status(500).json({ message: "Failed to load product page." });
    }
};


// GET PRODUCT BY ID
const getProductsById = (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: "Product ID is required." });
    }

    return res.status(200).json({
        message: "Product fetched successfully.",
        id: id
    });
};


// POST PRODUCT → Receive productName
const postProduct = (req, res) => {
    try {
        const data = req.body;  

        // Check if body is coming
        if (!data || !data.productName) {
            return res.status(400).json({
                message: "productName is missing in request body.",
                receivedBody: data
            });
        }

        console.log(" Product received:", data);

        return res.status(201).json({
            message: "Product added successfully.",
            product: data.productName
        });

    } catch (error) {
        console.error(" Error in POST product:", error.message);
        return res.status(500).json({
            message: "Internal server error while adding product."
        });
    }
};


// PUT PRODUCT
const putProduct = (req, res) => {
    return res.status(200).json({
        message: "PUT request handled successfully."
    });
};


// DELETE PRODUCT BY ID
const deleteProductById = (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: "Product ID is required to delete." });
    }

    return res.status(200).json({
        message: "Product deleted successfully.",
        deletedId: id
    });
};


// ✅ Export All Controllers
module.exports = {
    getProducts,
    getProductsById,
    postProduct,
    putProduct,
    deleteProductById
};

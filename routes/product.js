const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductsById);

router.post('/', productController.postProduct);

// put request
router.put('/:id', productController.putProduct);

// delete request
router.delete('/:id', productController.deleteProductById);

module.exports = router;

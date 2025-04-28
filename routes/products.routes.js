const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

// GET http://localhost:3000/api/products/
router.get("/", productsController.getAllProducts)

//POST http://localhost:3000/api/products/
router.post("/", productsController.createProduct);

//PUT http://localhost:3000/api/products/
router.put("/:id", productsController.updateProduct)

//DELETE http://localhost:3000/api/products/
router.delete("/", productsController.deleteProduct)

module.exports = router;
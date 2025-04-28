const express = require('express');
const router = express.Router();
const providersController = require('../controllers/providers.controller');

//GET http://localhost:3000/api/providers/
router.get("/", providersController.getProviders)

// POST http://localhost:3000/api/providers/
router.post("/", providersController.createProvider);

//PUT http://localhost:3000/api/providers/
router.put("/:id", providersController.updateProvider)

//DELETE http://localhost:3000/api/providers/
router.delete("/", providersController.deleteProvider)

module.exports = router;
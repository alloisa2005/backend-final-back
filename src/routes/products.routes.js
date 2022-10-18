const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller')

// Middleware que verifica existencia de id de producto
const { validarIdProd} = require('../middlewares/validarIds')

router.get('/', ProductController.getAll)

router.get('/:id_prod', validarIdProd, ProductController.getById)

router.post('/', ProductController.save)

router.put('/:id_prod', validarIdProd, ProductController.update)

router.delete('/:id_prod', validarIdProd, ProductController.delete)

module.exports = router;
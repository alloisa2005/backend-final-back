const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller')


router.get('/', ProductController.getAll)

router.get('/:id_prod', ProductController.getById)

router.post('/', ProductController.save)

router.put('/:id_prod', ProductController.update)

router.delete('/:id_prod', ProductController.delete)

module.exports = router;
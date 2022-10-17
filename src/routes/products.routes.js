const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/', async (req, res) => {

  let prods = await Product.find();
  res.send({status: 'OK', result: prods});
})

router.get('/:id_prod', async (req, res) => {
  let { id_prod } = req.params;

  try {
    let prod = await Product.findById(id_prod);    

    // Si el producto no existe
    if(!prod) return res.status(401).send({status: 'ERROR', result: `No existe producto ID: ${id_prod}`});  

    return res.status(200).send({status: 'OK', result: prod});  
  } catch (error) {
    res.status(404).send({status: 'ERROR', result: error.message});  
  }  
})

router.post('/', async (req, res) => {
  
  let prod = await Product.create(req.body);
  res.send({status: 'OK', result: prod});

})

router.put('/:id_prod', async (req, res) => {
  let { id_prod } = req.params;

  try {
    let prod = await Product.findByIdAndUpdate({_id: id_prod}, req.body)

    // Si el producto no existe
    if(!prod) return res.status(404).send({status: 'ERROR', result: `No existe producto ID: ${id_prod}`});  

    return res.status(200).send({status: 'OK', result: prod});  

  } catch (error) {
    res.status(404).send({status: 'ERROR', result: error.message});  
  } 
})

module.exports = router;
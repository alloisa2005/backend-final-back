const Product = require('../models/product.model');

const validarIdProd = async (req, res, next) => {

  let { id_prod } = req.params;

  try {    
    let prod = await Product.findById(id_prod);    

    // Si el producto no existe
    if(!prod) return res.status(404).send({status: 'ERROR', result: `No existe producto ID: ${id_prod}`});
    
    next();
  } catch (error) {
    return res.status(404).send({status: 'ERROR', result: error.message});
  }
}

module.exports = { validarIdProd }
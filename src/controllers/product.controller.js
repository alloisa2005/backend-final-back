
const Product = require('../models/product.model');

class ProductController {
  async getAll(req, res) {
    try {
      let prods = await Product.find();

      return res.status(200).send({status: 'OK', result: prods});
    } catch (error) {
      return res.status(404).send({status: 'ERROR', result: error.message});
    }
  }

  async getById(req, res) {
    let { id_prod } = req.params;

    try {      
      let prod = await Product.findById(id_prod);    

      // Si el producto no existe
      if(!prod) return res.status(404).send({status: 'ERROR', result: `No existe producto ID: ${id_prod}`});  

      return res.status(200).send({status: 'OK', result: prod}); 

    } catch (error) {
      return res.status(404).send({status: 'ERROR', result: error.message});
    }
  }

  async save(req, res) {
    try {
      let prod = await Product.create(req.body);

      return res.status(200).send({status: 'OK', result: prod});
    } catch (error) {
      return res.status(404).send({status: 'ERROR', result: error.message});
    }
  }

  async update(req, res) {
    let { id_prod } = req.params;

    try {
      let prod = await Product.findByIdAndUpdate(id_prod, req.body, {new:true})      

      // Si el producto no existe
      if(!prod) return res.status(404).send({status: 'ERROR', result: `No existe producto ID: ${id_prod}`});  

      return res.status(200).send({status: 'OK', result: prod});  

    } catch (error) {
      res.status(404).send({status: 'ERROR', result: error.message});  
    } 
  }

  async delete(req, res) {
    let { id_prod } = req.params;

    try {
      let prod = await Product.findByIdAndDelete(id_prod)

      if(!prod) return res.status(404).send({status: 'ERROR', result: `No existe producto ID: ${id_prod}`}); 
      return res.status(200).send({status: 'OK', result: `Producto ID: ${id_prod} eliminado`});  
      
    } catch (error) {
      res.status(404).send({status: 'ERROR', result: error.message});  
    }
  }
}

module.exports = new ProductController();
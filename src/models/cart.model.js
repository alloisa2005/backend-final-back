const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  cant: {type: Number},
  price: {type: Number, required: true}  
})

const cartSchema = mongoose.Schema(
  {
    products: [productSchema] 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
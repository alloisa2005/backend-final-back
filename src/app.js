
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const productRoutes = require('./routes/products.routes')

const app = express();
const PORT = process.env.PORT || 8080;

//// Conexión BD
mongoose.connect('mongodb://localhost:27017/ecommerce_p')
  .then( () => console.log('BD Conectada'))
  .catch( err => console.log(err))

app.use( cors() );

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//// RUTAS ////
app.use('/api/productos', productRoutes)

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));
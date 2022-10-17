const express = require('express')
const cors = require('cors')

const productRoutes = require('./routes/products.routes')

const app = express();
const PORT = process.env.PORT || 8080;

app.use( cors() );

app.use(json());
app.use(urlencoded({extended:true}));

//// RUTAS ////
app.use('/api/productos', productRoutes)

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));
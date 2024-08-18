const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config()

const user = require('./userRoutes')
// require('./routes/productRoutes')
// require('./routes/categoryRoutes')
 
const PORT = process.env.PORTA_BANCO || 8888
app.use(cors())
app.use(bodyParser.json());
app.listen(PORT, ()=> { console.log('http://localhost:'+PORT)})

module.exports = app
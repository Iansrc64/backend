const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');


const app = express();

require('dotenv').config()

const user = require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')
app.use(cors())
app.use(bodyParser.json());
const PORT = process.env.PORTA_BANCO || 10000

app.listen(PORT, ()=> { console.log('http://localhost:'+PORT)})

module.exports = app
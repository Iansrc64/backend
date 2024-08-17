const express = require('express');

const app = express();

require('dotenv').config()

require('./routes/userRoutes')
require('./routes/productRoutes')

const PORT = process.env.PORTA_BANCO || 3333

app.listen(PORT, ()=> { console.log('http://localhost:'+PORT)})

module.exports = app
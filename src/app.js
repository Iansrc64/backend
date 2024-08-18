require('dotenv').config()

const user = require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')
const app = require('./routes/app-express')

const PORT = 10000

app.listen(PORT, ()=> { console.log('http://localhost:'+PORT)})

module.exports = app
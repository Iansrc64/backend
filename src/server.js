const app = require('./app')
require('dotenv').config()

const port = process.env.port // || 3333

app.listen(port, () => console.log(`Server runnning on port ${port}`))
// Usando dotenv para não expor porta usada no github
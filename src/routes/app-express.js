const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json()) 
app.use(cors()) 

module.exports = app
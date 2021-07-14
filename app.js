require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const db = require('./models/index')

const routes = require('./routes/index')

app.use(express.json())

app.use('/api/auth', routes.Auth)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
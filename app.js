require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const db = require('./models/index')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')

const routes = require('./routes/index')

app.use(express.json())

app.use('/api/auth', routes.Auth);

app.use(express.static(path.join(__dirname, './frontend/build')));

app.get('*', function (_, res){
  res.sendFile(
    path.join(__dirname, './frontend/build/index.html'),
    function (err){
      if(err) {
        res.status(500).send(err);
      }
    }
  )
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
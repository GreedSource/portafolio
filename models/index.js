const mongoose = require('mongoose')
const connection = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.9b1df.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.set("debug", true)
mongoose.Promise = global.Promise
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true  })

mongoose.connection.on('connected', () => {
    console.log('connection stablished')
})

mongoose.connection.on('error', (err) => {
    consoel.log('err connecting', err)
})

module.exports.User = require("./user")
const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Greeting = new Schema({
  message: String
})

Greeting.plugin(random)

module.exports = Greeting

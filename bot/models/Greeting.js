const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Greeting = new Schema({
  message: String
})

module.exports = Greeting

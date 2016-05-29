const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const CheckIn = new Schema({
  message: String,
  options: Array
})

CheckIn.plugin(random)

module.exports = CheckIn

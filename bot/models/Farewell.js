const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Farewell = new Schema({
  message: String
})

Farewell.plugin(random)

module.exports = Farewell

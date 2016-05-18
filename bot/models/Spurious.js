const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Spurious = new Schema({
  message: String
})

Spurious.plugin(random)

module.exports = Spurious

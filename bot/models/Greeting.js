const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Greeting = new Schema({
  message: {
    text: String,
    options: Array,
    image: String,
    video: String,
    audio: String,
    chart: Object,
    source: String
  },
  visited: Boolean
})

Greeting.plugin(random)

module.exports = Greeting

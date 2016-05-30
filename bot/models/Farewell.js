const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Farewell = new Schema({
  message: {
    text: String,
    options: Array,
    image: String,
    video: String,
    audio: String,
    chart: Object,
    source: String
  }
})

Farewell.plugin(random)

module.exports = Farewell

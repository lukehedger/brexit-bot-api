const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const CheckIn = new Schema({
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

CheckIn.plugin(random)

module.exports = CheckIn

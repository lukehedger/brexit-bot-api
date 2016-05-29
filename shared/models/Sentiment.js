const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Sentiment = new Schema({
  message: String,
  maxScore: Number,
  minScore: Number
})

Sentiment.plugin(random)

module.exports = Sentiment

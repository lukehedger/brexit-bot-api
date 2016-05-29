const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
const Schema = mongoose.Schema

const Topic = new Schema({
  name: String,
  message: String,
  source: String
})

Topic.plugin(random)

module.exports = Topic

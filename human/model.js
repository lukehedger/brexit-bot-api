const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Human = new Schema({
  id: { type: String, required: true, unique: true },
  brexit: { type: Boolean, required: true },
  created_at: Date,
  updated_at: Date
})

Human.pre('save', function(next) {

  const currentDate = new Date()

  this.updated_at = currentDate

  if (!this.created_at) {
    this.created_at = currentDate
  }

  next()

})


Human.pre('findOneAndUpdate', function(next) {

  this.update({}, { $set: { updated_at: new Date() }})

  next()

})

module.exports = Human

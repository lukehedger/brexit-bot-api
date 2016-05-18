"use strict"

const mongoose = require('mongoose')
const Bot = require('../bot')

console.log('bot/service', Bot);


// const schema = Bot.models
// const name = Bot.name
// const collection = Bot.collection
//
// console.log(Bot);
//
// const Greeting = mongoose.model(collection.greeting, schema.greeting)
// const Poll = mongoose.model(collection.poll, schema.poll)
// const Spurious = mongoose.model(collection.spurious, schema.spurious)
// const Topic = mongoose.model(collection.topic, schema.topic)
//
// exports.greeting = () => {
//
//   Greeting.findOne({ _id: '573b1772dbac06a30e0a41f9' }, 'message', (err, greeting) => {
//
//     return err ? err : greeting
//
//   })
//
// }

// exports.sample = () => {
//
//   return true
//
// }

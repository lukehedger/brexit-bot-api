"use strict"

const mongoose = require('mongoose')

const schema = require('./models')
const constants = require('./constants')
const collection = constants.collection

const Greeting = mongoose.model(collection.greeting, schema.greeting)
const Poll = mongoose.model(collection.poll, schema.poll)
const Spurious = mongoose.model(collection.spurious, schema.spurious)
const Topic = mongoose.model(collection.topic, schema.topic)

exports.greeting = () => {

  Greeting.findOneRandom((err, greeting) => {

    return err ? err : greeting

  })

}

exports.poll = (name) => {

  Poll.findOne({ name: name }, (err, poll) => {

    return err ? err : poll

  })

}

exports.spurious = () => {

  Spurious.findOneRandom((err, spurious) => {

    return err ? err : spurious

  })

}

exports.topic = (name) => {

  Topic.findOne({ name: name }, (err, topic) => {

    return err ? err : topic

  })

}

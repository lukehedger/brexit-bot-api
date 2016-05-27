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

  return new Promise( (resolve, reject) => {

    Greeting.findOneRandom((err, greeting) => {

      return err ? reject(err) : resolve(greeting)

    })

  })

}

exports.poll = (name) => {

  return Poll.findOne({ name: name })

}

exports.spurious = () => {

  return new Promise( (resolve, reject) => {

    Spurious.findOneRandom((err, spurious) => {

      return err ? reject(err) : resolve(spurious)

    })

  })

}

exports.topic = (name) => {

  return Topic.findOne({ name: name })

}

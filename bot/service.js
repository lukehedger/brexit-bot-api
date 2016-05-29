"use strict"

const mongoose = require('mongoose')

const schema = require('./models')
const constants = require('./constants')
const collection = constants.collection

const CheckIn = mongoose.model(collection.checkin, schema.checkin)
const Farewell = mongoose.model(collection.farewell, schema.farewell)
const Greeting = mongoose.model(collection.greeting, schema.greeting)
const Poll = mongoose.model(collection.poll, schema.poll)
const Spurious = mongoose.model(collection.spurious, schema.spurious)
const Topic = mongoose.model(collection.topic, schema.topic)

exports.greeting = (visited) => {

  return new Promise( (resolve, reject) => {

    Greeting.findRandom({ visited }, { message: 1 }, { limit: 1 }, (err, greeting) => {

      return err ? reject(err) : resolve(greeting[0])

    })

  })

}

exports.choice = () => {

  return new Promise( (resolve, reject) => {

    Topic.findRandom({}, { name: 1 }, { limit: 3 }, (err, topics) => {

      return err ? reject(err) : resolve(topics)

    })

  })

}

exports.poll = (name) => {

  return Poll.findOne({ name })

}

exports.spurious = () => {

  return new Promise( (resolve, reject) => {

    Spurious.findOneRandom((err, spurious) => {

      return err ? reject(err) : resolve(spurious)

    })

  })

}

exports.topic = (name) => {

  return Topic.findOne({ name })

}

exports.farewell = () => {

  return new Promise( (resolve, reject) => {

    Farewell.findOneRandom( (err, farewell) => err ? reject(err) : resolve(farewell) )

  })

}

exports.checkin = () => {

  return new Promise( (resolve, reject) => {

    CheckIn.findOneRandom( (err, checkin) => err ? reject(err) : resolve(checkin) )

  })

}

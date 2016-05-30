"use strict"

const mongoose = require('mongoose')

const schema = require('./model')
const constants = require('./constants')
const collection = constants.collection

const Human = mongoose.model(collection, schema)

exports.create = (id, brexit) => {

  return Human.create({ id, brexit })

}

exports.read = (id) => {

  return Human.findOne({ id }, 'brexit')

}

exports.update = (id, brexit) => {

  return Human.findOneAndUpdate({ id }, { brexit })

}

exports.poll = () => {

  return new Promise( (resolve, reject) => {

    let results = { brexit: 0, bremain: 0 }

    Human.find({}, 'brexit', (err, humans) => {

      if (err) return reject(err)

      humans.map( h => h.brexit ? results.brexit++ : results.bremain++ )

      return resolve(results)

    })

  })

}

"use strict"

const sentiment = require('sentiment')
const mongoose = require('mongoose')

const schema = require('../models')
const constants = require('../constants')
const collection = constants.collection

const Sentiment = mongoose.model(collection.sentiment, schema.sentiment)

exports.analysis = (text) => {

  return sentiment(text)

}

exports.message = ({ score }) => {

  return new Promise( (resolve, reject) => {

    Sentiment.findRandom({$and: [{ minScore: {$lte: score}, maxScore: {$gte: score} }]}, { message: 1 }, { limit: 1 }, (err, sentiment) => {

      return err ? reject(err) : resolve(sentiment[0])

    })

  })

}

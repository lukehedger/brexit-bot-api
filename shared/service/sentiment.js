"use strict"

const sentiment = require('sentiment')

exports.analysis = (text) => {

  return sentiment(text)

}

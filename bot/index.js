const routes = require('./routes')
const models = require('./models')
const constants = require('./constants')

const collection = constants.collection
const name = constants.name

module.exports = {
  routes,
  models,
  collection,
  name
}

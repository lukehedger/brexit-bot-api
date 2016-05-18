const express = require('express')
const router = express.Router()

const Bot = require('../bot')
const Human = require('../human')

router.get('/', (req, res, next) => {

  res.send('🤖')

  next()

})

router.use(`/${Bot.name}`, Bot.routes)
router.use(`/${Human.name}`, Human.routes)

module.exports = router

const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post( '/create', controller.create, (req, res, next) => next() )
router.get( '/read/:id', controller.read, (req, res, next) => next() )
router.put( '/update/:id', controller.update, (req, res, next) => next() )
router.post( '/sentiment/:text', controller.sentiment, (req, res, next) => next() )

module.exports = router

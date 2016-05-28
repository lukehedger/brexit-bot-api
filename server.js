const app = require('express')()
const bodyParser = require('body-parser')
const database = require('./database')
const routes = require('./shared/routes')

const PORT = process.env.PORT || 8000

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/', routes)

// server
const server = app.listen(PORT, () => {

    const port = server.address().port

    console.log(`🤖 Listening on port ${port}`)

})

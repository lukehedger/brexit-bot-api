const app = require('express')()
const bodyParser = require('body-parser')
const database = require('./database')
const routes = require('./shared/routes')

const SERVER_HOST = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const SERVER_PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000

// parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/', routes)

// server
const server = app.listen(SERVER_PORT, SERVER_HOST, () => {

    const host = server.address().address
    const port = server.address().port

    console.log(`🤖 Listening on http://${host}:${port}`)

})

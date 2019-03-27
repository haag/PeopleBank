require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const port = process.env.PORT || 3000
const server = express()

server.use(bodyParser.json())
server.use(cors())
server.use(helmet())
server.use(morgan('combined'))


server.use(bodyParser.urlencoded({ extended: false }))
server.use('/api', routes)




server.listen(port, () => {console.log(`listening on ${port}`)})
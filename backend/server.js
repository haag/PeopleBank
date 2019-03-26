require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')

const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const root = "./"
const port = process.env.PORT || 3000
const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('combined'))


server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({ extended: false }))
// server.use(express.static(path.join(root, 'dist')))
server.use('/api', routes)

// server.get('*', (req, res) => {
//     res.sendFile('../frontend/app.component.html', { root })
// })


server.listen(port, () => {console.log(`listening on ${port}`)})
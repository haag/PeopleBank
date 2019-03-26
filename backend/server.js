require('dotenv').config()
const db = require('./queries')

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(cors())
server.use(bodyParser.json())
server.use(morgan('combined'))


const DB = [
    {
        id: 1,
        name: "Kyle",
        notes: "Likes to eat, drink, and sleep",
    },
    {
        id: 2,
        name: "John",
        notes: "Likes to eat, drink, and sleep",
    }
]


server.post('/person', db.createPerson)
server.put('/person/:id', db.updatePerson)
server.delete('/person/:id', db.deletePerson)

server.get('/people', db.getPeople)

server.post('/users', db.createUser)
// server.get('/users/:id', db.getUserById)

//USE TO CHECK EMAIL
server.get('/users', db.getUsers)

// server.post('/users', Tutorialdb.createUser)

server.get('/', (req, res) => {
    const data = DB.map(data => 
        ({
        id: data.id,
        name: data.name,
        notes: data.notes,
        })
    )
        res
        .status(200)
        .send(data)
})


server.get('/:id', (req, res) => {
    const data = DB.filter(data => (data.id === parseInt(req.params.id)))
    if(data.length > 1) return res.status(500).send({msg: "Something went terribly wrong on the server's end"})
    if(data.length === 0) return res.status(404).send({msg: "That location doesn't seem to exist"})
    if(data.length < 1) return res.status(500).send({msg: "Something went terribly wrong on the server's end"})
    res.send(data[0])
})

server.post('/', (req, res) => {
    const {name, notes} = req.body
    const newPerson = {
        id: DB.length + 1,
        name,
        notes,
        author: req.user.name,
    }
    DB.push(newPerson)
    res.status(201)
    res.send(newPerson)

})


server.listen(process.env.PORT || 9000, () => {console.log('listening on port 5050')})
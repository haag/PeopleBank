const Person = require('./mongo-model')

require('./mongo').connect()

function getPeople(req, res) {
    const docquery = Person.find({})
    docquery
    .exec()
    .then(people => {
        res.status(200).json(people)
    })
    .catch(error => {
        res.status(500).send(error)
        return
    })
}

module.exports = {
    getPeople
}
const Person = require('./person-model')
const ReadPreference = require('mongodb').ReadPreference;
require('./mongoConnect').connect()

function getPeople(req, res) {
    const docquery = Person.find({}).read(ReadPreference.NEAREST);
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

function postPerson(req, res) {
    const originalPerson = { id: req.body.id, name: req.body.name, saying: req.body.saying };
    const person = new Person(originalPerson);
    person.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(person);
      console.log('Person created successfully!');
    });
  }
  
  function putPerson(req, res) {
    const originalPerson = {
      id: parseInt(req.params.id, 10),
      name: req.body.name,
      saying: req.body.saying
    };
    Person.findOne({ id: originalPerson.id }, (error, person) => {
      if (checkServerError(res, error)) return;
      if (!checkFound(res, person)) return;
  
      person.name = originalPerson.name;
      person.saying = originalPerson.saying;
      person.save(error => {
        if (checkServerError(res, error)) return;
        res.status(200).json(person);
        console.log('person updated successfully!');
      });
    });
  }
  
  function deletePerson(req, res) {
    const id = parseInt(req.params.id, 10);
    Person.findOneAndRemove({ id: id })
      .then(person => {
        if (!checkFound(res, person)) return;
        res.status(200).json(person);
        console.log('Person deleted successfully!');
      })
      .catch(error => {
        if (checkServerError(res, error)) return;
      });
  }
  
  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }
  
  function checkFound(res, person) {
    if (!person) {
      res.status(404).send('person not found.');
      return;
    }
    return person;
  }

module.exports = {
    getPeople,
    postPerson,
    putPerson,
    deletePerson
}
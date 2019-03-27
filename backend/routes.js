const express = require('express')
const router = express.Router()
const personService = require('./person.service')
router.get('/heroes', (req, res) => {
    personService.getPeople(req, res)

})

module.exports = router
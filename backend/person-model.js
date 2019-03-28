const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: String
}, {
    collection: 'People'
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person
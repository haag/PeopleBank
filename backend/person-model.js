const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    //About
    first_name: String,
    last_name: String,
    nickname: String,
    from: String,
    work: String,
    school: String,
    my_relationship: String,
    we_met: String,
    relationship_depth: String,
    birthdate: String,
    siblings: Number,
    children: Number,
    family_position: Number,
    phone: Number,
    email: String,
    contact: String,
    
    //Default
    id: { type: Number, required: true },
    living: { type: Boolean, default: true },
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
    
    //Favorites
    favColor: String,
    favFood: String,
    favSiblig: String,
    favSport: String,
    favBook: String,
    favMovie: String,
    favOther: String,
    
    other: String,
}, {
    collection: 'People'
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person
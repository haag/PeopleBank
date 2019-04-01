const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    //About
    name: String,
    nickname: String,
    from: String,
    work: String,
    school: String,
    myRelationship: String,
    weMet: String,
    birthdate: Number,
    siblings: Number,
    birthOrder: Number,
    
    //Default
    // id: { type: Number, required: true },
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
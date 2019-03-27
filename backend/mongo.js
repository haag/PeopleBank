

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mongoUri = `${process.env.DB_STRING}`
// console.log('mongoUri:', `${mongoUri}`)

function connect (){
    return mongoose.connect(mongoUri, { useNewUrlParser: true })
}


module.exports = {
    connect
}
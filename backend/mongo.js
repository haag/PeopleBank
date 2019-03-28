const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mongoUri = `mongodb://${process.env.dbName}:${process.env.key}@${process.env.dbName}.documents.azure.com:${process.env.cosmosPort}/?ssl=true`; //&replicaSet=globaldb`;

// const mongoUri = `${process.env.DB_STRING}`
// console.log('mongoUri:', `${mongoUri}`)

function connect() {
    mongoose.set('debug', true);
    return mongoose.connect(mongoUri, { useMongoClient: true });
   }

module.exports = {
    connect,
    mongoose
  };
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function connect() {
    mongoose.set('debug', true);
    return mongoose.connect(process.env.COSMOSDB_CONNSTR+"?ssl=true&replicaSet=globaldb", {
            auth: {
              user: process.env.COSMODDB_USER,
              password: process.env.COSMOSDB_PASSWORD
            }
          })
          .then(() => console.log('Connection to CosmosDB successful'))
          .catch((err) => console.error(err));
}


module.exports = {
    connect,
    mongoose
  };
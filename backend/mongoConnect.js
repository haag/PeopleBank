const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// function connect() {
//     mongoose.set('debug', true);
//     return mongoose.connect(process.env.COSMOSDB_CONNSTR+"?ssl=true&replicaSet=globaldb", 
//     { 
//         // useCreateIndex: true, 
//         useNewUrlParser: true, 
//         auth: {
//               user: process.env.COSMODDB_USER,
//               password: process.env.COSMOSDB_PRIMARY_PASSWORD
//             }        
//     })
//         .then(() => console.log('Connection to CosmosDB successful'))
//         .catch((err) => console.error("Connection UNSUCCESSFUL", err));
// }

//MSI CONNECTION
function connect() {
    mongoose.set('debug', true);
    console.log('process.env.MSI_COSMOSDB_CONNSTR:', process.env.MSI_COSMOSDB_CONNSTR)
    return mongoose.connect(process.env.MSI_COSMOSDB_CONNSTR, 
    { 
        // useCreateIndex: true, 
        //WHEN NEW PARSER IS SET TO TRUE RETURNS DB MUST BE A STRING
        useNewUrlParser: false, 
        auth: {
              user: process.env.MSI_COSMODDB_USER,
              password: process.env.MSI_COSMOSDB_PASSWORD
            }        
    })
        .then(() => console.log('Connection to MSI Cosmos successful'))
        .catch((err) => console.error("Connection to MSI Cosmos UNSUCCESSFUL", err));
}


module.exports = {
    connect,
    mongoose
  };
//Arquivo 2
const connectToDatabase = require('./src/database/connect')
//const foi importada de connect.js através do module.exports

//chamando a função
connectToDatabase()

require('./modules/express') //recebendo o express

//Arquivo 1 - arquivo que se conecta ao banco de dados
const mongoose = require('mongoose')
//Importando o mongoose

const connectToDatabase = async() => {
  await mongoose.connect("mongodb://localhost/cadastroConsultoria", (error) => {
  if (error) {
    return console.log("Erro ao se conectar ao banco de dados", error)
  }
    return console.log("Conexão realizada com sucesso!")
})
}
//função assíncrona que vai conectar ao Mongodb, essa função checa se existe algum erro ou não

module.exports = connectToDatabase
//exporta o módulo para o index.js

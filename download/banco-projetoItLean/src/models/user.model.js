//Arquivo 3 - Schema - onde fica os requerimentos do formulário
const mongoose = require('mongoose') //importando o mongoose

const userSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  telefone: {type: Number, required: true},
  consultora: {type: String, required: true},
  tratamento: {type: String, required: true}
})

const UserModel = mongoose.model ('User', userSchema)
//diz ao banco qual o padrao de campos requeridos a collection deve ter

//exportando o module
module.exports = UserModel


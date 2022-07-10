//Arquivo 4
const express = require('express')
const UserModel = require('../src/models/user.model') //importando o UserModel

const app = express()
app.use(express.json())

const mongoose = require('mongoose')



//Criar um cadastro
app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body) 
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Buscar cadastros
app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

//Buscar cadastro pelo id
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

//Atualizar dados pelo ID
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true}) 
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Deletar cadastro
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findOneAndRemove(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})



const port = 8080
app.listen(port, () => 
  (`Rodando na porta http://localhost:${port}`))
  console.log("Servidor rodando na url http://localhost:8080")
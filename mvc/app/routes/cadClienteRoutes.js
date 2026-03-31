const express = require("express")

const rota = express.Router()

const  cadClienteController = require("../controllers/cadClienteController")

//Rota principal (página inicial)
rota.get("/cadastro", cadClienteController.index) //define a rota (caminho) da página Cadastro de Cliente

module.exports = rota // exporta a rota para uso no app principal e outros arquivos que possivelmente utilizarão também
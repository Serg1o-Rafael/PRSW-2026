const express = require("express")

const rota = express.Router()

const  homeController = require("../controllers/homeController")

//Rota principal (página inicial)
rota.get("/") //define a rota (caminho)

module.exports = rota // exporta a rota para uso no app principal e outros arquivos que possivelmente utilizarão também
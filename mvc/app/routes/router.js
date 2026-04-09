const express = require("express")
const rota = express.Router()
 
// CORREÇÃO: Importando da pasta 'controllers' (conforme sua imagem)
const homeController = require("../controllers/homeController")
const cadClienteController = require("../controllers/cadClienteController")
 
// Rota da página inicial
rota.get('/', homeController.index)
 
// Rota Cadastro de Cliente
rota.get('/cadastro', cadClienteController.formCadastroCliente)
 
module.exports = rota
 
const express = require("express")
const rota = express.Router()
 
// CORREÇÃO: Importando da pasta 'controllers' (conforme sua imagem)
const homeController = require("../controllers/homeController")
const cadClienteController = require("../controllers/cadClienteController")
const addClienteController = require("../controllers/addClienteController")
 
// Rota da página inicial
rota.get('/', homeController.index)
 
// Rota Cadastro de Cliente
rota.get('/cadastro', cadClienteController.formCadastroCliente)
rota.get('/cadastro' , addClienteController.addClienteCadastro)
module.exports = rota


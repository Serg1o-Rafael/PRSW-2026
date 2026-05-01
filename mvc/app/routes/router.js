const express = require("express")
const rota = express.Router()
 
// CORREÇÃO: Importando da pasta 'controllers' (conforme sua imagem)
const homeController = require("../controllers/homeController")
const cadClienteController = require("../controllers/cadClienteController")
const addClienteController = require("../controllers/addClienteController")
const confirmaSenhaController = require("../controllers/confirmaSenhaController")
const vamossfcController = require("../controllers/vamossfcController")
 
// Rota da página inicial
rota.get('/', homeController.index)
 
// Rota Cadastro de Cliente
rota.get('/cadastro', cadClienteController.formCadastroCliente)
rota.get('/cadastro' , addClienteController.addClienteCadastro)
rota.get('/confirma', confirmaSenhaController.confirmaSenhaCliente)
//rota bora peixada
rota.post('/vamossfc', vamossfcController.vamossfcAgradece)
module.exports = rota


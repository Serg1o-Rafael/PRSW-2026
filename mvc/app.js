
const express = require("express")
 
const rota = require("./app/routes/router")
 
// Criar a variavel (que é uma constante) de aplicacao do projeto
 
const aplicacao = express()
 
// Acesso aos arquivos CSS e imagens
aplicacao.use(express.static("./app/public"))
 
// view engine ( Especie de um navegador do back end) é o interpretador de páginas e (EJS) => HTML do lado Servidor, ou seja, é um html do back end.
aplicacao.set("view engine", "ejs") // o aplicativo está definindo que o view engine interpretará o template (modelo) ejs  
 
// view é a pasta que coném arquivos ejs
aplicacao.set("views", "./app/views")

/* JSON analisa os dados do formulário que ficam no corpo da solicitação (método POST), também denominado request da entrada para ser enviado ao servidor web */
aplicacao.use(express.json())

/* a linha de comando abaixo é utilizado para ler os dados do formulário */
/* Extended true significa que a função urlencoded conseguiu d+ecifrar, ou seja, entender os dados do formulário*/
aplicacao.use(express.urlencoded({extended: true}))


// via de acesso para comunicacao entre cliente (navegador) e o servidor web (nodeJS)
const viaConexao = 3000
 
aplicacao.use("/", rota)
 
// Funcao que executa o servidor web que fica na escuta uma provavel solicitacao de recursos por parte do navegador
 
aplicacao.listen(viaConexao, () => {
    console.log("Servidor rodando e escutando na porta " + viaConexao)


})
 


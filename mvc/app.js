/**
    express é um módulo NPM (Node Package Manager), traduzindo, gerenciador de pacotes NODE JS.
    Dentro de cada módulo de um arquivo (arquivo), há uma coleção de objetos e funções prontas para serem utilizadas.
    Express é o principal modulo NPM, Ou seja, quando instalado ele cria uma pasta com varios outros modulos.
    Essa pasta é denominada node_modules.
 
    A funcao require diz para o servidor web que este arquivo poderá utilizar todos os objetos e funcoes de um determinado modulo.
 */
const express = require("express")
 
// Criar a variavel (que é uma constante) de aplicacao do projeto
const aplicacao = express()


//Acesso aos arquivos CSS e Imagens
aplicacao.use(express.static("./app/public"))

// view engine(espéie de um navegador do back end) é o interpretador de páginas EJS (html no lado servidor, ou seja, é um html do back end) 
aplicacao.set("view engine", "ejs") // O aplicativo está definindo que o view engine interpretará o template (modelo) ejs

// views é a pasta que contém arquivos ejs
aplicacao.set("views")

// via de acesso para comunicacao entre cliente (navegador) e o servidor web (nodeJS)
const viaConexao = 3000


//Função que executa o servidor web que fica na escuta de um provável solicitação de recursos
aplicacao.listen(viaConexao, () => {
    console.log("Servidor web rodando e escutando na porta " + viaConexao)
})
const conexao = require('../config/conexao')

const Cliente = {
    /*
        Já que a execução da aplicação do nodejs e a execução do código SQL no MySQL Workbench, ocorrem simultaneamente
        são assíncronas, então é necessário ter o comando callback.
        Callback diz para o Mysql: "Insere os dados na tabela CLIENTES e me envia uma resposta dizendo se deu certo ou
    */

    inserirCliente: (dados, callback) => {
        const sql = `
            INSERT INTO CLIENTES(NOME, CPF, SENHA, CONFIRMA_SENHA)
            VALUES (?, ?, ?, ?)
        `

        conexao.query(sql,
            [
                dados.nome,
                dados.cpf,
                dados.senha,
                dados.confirmasenha
            ],
            callback
        )
    }
}

module.exports = Cliente
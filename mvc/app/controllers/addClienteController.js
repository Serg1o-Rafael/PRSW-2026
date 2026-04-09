exports.addClienteCadastro = (req, res) => {
    res.render('cadastro_cliente') //renderizar cadastro_cliente.ejs

    rota.post("/add_cliente"), function(req, res) {
    console.log("Dados enviados com sucesso!")

    /*     JSON tem por finalidade obter dados do formulário que são atribuidos as variáveis*/
var nome_cliente = req.body.nome
var cpf_cliente = req.body.cpf
var senha_cliente = req.body.senha
var confirmasenha_cliente = req.body.confirmasenha

res.render("../views/dados_formulario.ejs", {"nome_cliente": nome_cliente, "cpf_cliente": cpf_cliente, "senha_cliente":senha_cliente, "confirmasenha_cliente":confirmasenha_cliente})
}
 

}
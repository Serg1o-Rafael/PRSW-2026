const express = require("express")

const rota = express.Router()

rota.get("/", function (req, res) {
    res.render("../views/home.ejs")
})

module.exports = rota // este arquivo se tornou um módulo que pode ser exportado para outros arquivos
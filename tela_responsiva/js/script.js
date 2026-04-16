$(document).ready(function(){
    let largura_janela = $(window).width()
    if(largura_janela <= 480) {
        $("#paragrafo").append("Esta frase é somente para dispositivo móvel")
    }  else if(largura_janela >= 481 && largura_janela <= 768) {
    $("#paragrafo").append("Esta frase é somente para tablet") {
        else if(largura_)
    }
    }
})
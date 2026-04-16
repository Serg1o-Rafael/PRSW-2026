$(document).ready(function(){
    let largura_janela = $(window).width();
 
    if(largura_janela <= 480){
        $("#paragrafo").append("Esta frase é somente para dispositivo móvel");
    }
    // Corrigido: de & para &&
    else if(largura_janela >= 481 && largura_janela <= 768){
        $("#paragrafo").append("Esta frase é somente para tablet");
    }
    else if(largura_janela >= 769 && largura_janela <= 1024) {
        $("#paragrafo").append("Esta frase é monitor de média resolucao ou seja HD");
    }
    else {
        $("#paragrafo").append("Esta frase é monitor de alta resolucao ou seja FullHD");
    }
});
 
 
function soma(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3   
}
 console.log(soma(2,5,7))

 function media (nota1, nota2, nota3) {
    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
    let media_formato_brasil = media.toFixed(2)
    media_formato_brasil = media_formato_brasil.replace('.',',')
    return media_formato_brasil 
 } 

 // tofixed() é uma função que retorna a quantidade fixa de casas decimais         

 //replace() é uma função que substitui caractere(s) por outro(s) caractere(s)
 //1° parâmetro é o que será substituído
 //2° parâmetro é o que vai substituir

 console.log(media(5.5, 7, 9.7))


 function subtracao(valor1,valor2) {
    return valor1 - valor2
 }
console.log(subtracao(5,4))

function mutiplicacao(valor1,valor2) {
    return valor1 * valor2
}

console.log(mutiplicacao(5,5))
console.log(mutiplicacao(3,3))
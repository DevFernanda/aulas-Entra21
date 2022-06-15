var numeros = [1, 30, 40, 4, 5, 6, 10]
function maior(lista) {
    var maior = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    } return maior
} 

console.log(maior(numeros))

var numeros = [1, 30, 40, 4, 5, 6, 10]
function menor(lista) {
    var menor = Infinity;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]
        }
    } return menor
} 

console.log(menor(numeros))
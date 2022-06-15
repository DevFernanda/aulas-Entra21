/**const table = [1, 2, 3, 4, 5]

for (let i=0; i < table.length; i++) {
    console.log(table[i])
} */

/** function somando() { 
    var arr = [1,2,3,4,5];
    var soma = 0;

    for (var i=0; i < arr.length; i++){
        soma += arr[i];
    }

console.log(soma); */

var array = [1,2,3,4,5]
function somar (array){
    total = 0;
    for (var i=0; i < array.length; i++) {
        total = total + array[i]
    } 
    return total;
}

console.log (somar (array))

/** do prof */

function soma (lista) {
    var total2 = 0
    for (let i = 0; i < lista.length; i++) {
        total2 = total2 + lista[i]
    }
    return total2
}

var retorno = soma([1,2,3,4,5,6])
console.log(retorno)

var numeros =[10,20,30,40]
console.log(soma(numeros))
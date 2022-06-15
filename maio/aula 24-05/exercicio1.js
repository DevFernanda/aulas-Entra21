/*var numeros = [10, 5, 50, 60, 800, 15, -4]
function bubbleSort (items) {
    var length = items.length;
    for (let i = 0; i < length; i++) {
       for (let j=0; j < (length - i - 1); j++) {
           if (items[j] > items [j+1]){
               var tmp = items[j];
               items[j] = items[j+1];
               items[j+1] = tmp;
           }
        }
    }
}
bubbleSort(numeros);

console.log(numeros);*/

var numeros = [10, 5, 50, 60, 800, 15, -4]
// 10           5
// numeros[0] > numeros[1]
// aux = numeros[0]
// 5            5
// numeros[0] = numeros[1]
// numeros[1] = aux
var trocou = true
while (trocou) {
    trocou = false
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > numeros[i+1]){
            let aux = numeros[i]
            numeros[i] = numeros[i+1]
            numeros[i+1] = aux
            trocou = true
        }
    }
}
console.log(numeros.toString());
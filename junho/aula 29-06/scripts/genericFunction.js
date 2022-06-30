"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello', 'World']);
myNumArr.push(400);
myStrArr.push("Hi");
console.log(myNumArr);
console.log(myStrArr);
// let array:number[] = [1,2,3]
// function lala(array: number[]): number{
//     let total = 0;
//     for (let value of array){
//         total += value
//     } return total
// }
// console.log(lala(array));
function dados(p1, p2) {
    let vetor = [];
    vetor.push(p1);
    vetor.push(p2);
    return vetor;
}
let numeros = dados(10, 20);
numeros.push(50);
console.log(numeros);
let frutas = dados('laranja', 'banana');
frutas.push('morango');
console.log(frutas);
// function dados2(p1:any, p2:any):any{
//     let vetor: any[] = []
//     vetor.push(p1)
//     vetor.push(p2)
//     return vetor
// }
// let number = dados2(10, 20)
// let fruta2 = dados2('laranja', 20)
function base(n1, n2) {
    console.log(`${n1}, ${n2}`);
}
let boletim = base('José', 7);
let func1 = base('João', true);
let func2 = base('Pedro', false);

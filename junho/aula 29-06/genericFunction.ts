function getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100,200,300]);
let myStrArr = getArray<string>(['Hello', 'World']);

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

function dados<T>(p1:T,p2:T): T[]{
    let vetor:T[] = []
    vetor.push(p1)
    vetor.push(p2)
    return vetor
}

let numeros = dados<number>(10,20)
numeros.push(50)
console.log(numeros);

let frutas = dados<string>('laranja', 'banana')
frutas.push('morango')
console.log(frutas);

// function dados2(p1:any, p2:any):any{
//     let vetor: any[] = []
//     vetor.push(p1)
//     vetor.push(p2)
//     return vetor
// }

// let number = dados2(10, 20)
// let fruta2 = dados2('laranja', 20)

function base<T, U>(n1:T, n2: U){
    console.log(`${n1}, ${n2}`)
}

let boletim = base<string, number>('José', 7)
let func1 = base<string, boolean>('João', true)
let func2 = base<string, boolean>('Pedro', false)
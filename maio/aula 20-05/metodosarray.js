var frutas = ["uva", "limao", "acerola"]

console.log(frutas.toString()) // imprime itens

frutas.pop() // remove ultimo item
console.log(frutas.toString())

frutas.push("kiwi") // adc item no final 
console.log(frutas.toString())

frutas.shift() // remove item do inicio
console.log(frutas.toString())

frutas.unshift("melancia") // adiciona item no inicio
console.log(frutas.toString())
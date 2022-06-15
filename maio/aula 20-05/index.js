var frutas = ["uva", "maca", "banana", "laranja"]

console.log(frutas[1])

for (let i=0; i < frutas.length; i++) {
    console.log(`posição ${i} -> ${frutas[i]}`)
}

var x = 0
while (x < frutas.length) {
    console.log(`posição ${x} -> ${frutas[x]}`)
    x++
}
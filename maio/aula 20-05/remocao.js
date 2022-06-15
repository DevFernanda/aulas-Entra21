var carnes = ["costela", "alcatra", "picanha", "maminha"]

console.log(carnes.toString())

delete carnes[3]
console.log(carnes.toString())

carnes.push("mortadela")
console.log(carnes.toString())

carnes[3] = "maminha"
console.log(carnes.toString())

carnes.splice(2,1)
console.log(carnes.toString())

carnes.splice(1,0,"linguicinha")
console.log(carnes.toString())

carnes.splice(1,2)
console.log(carnes.toString())

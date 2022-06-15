var nome = "Fernanda"
var nota1 = 5
var nota2 = 5
var nota3 = 5
var media = ((nota1 + nota2 + nota3)/3)
var situacao = "aprovado"


if (media < 7) {
   situacao = "reprovado"
}

console.log(`${nome}, sua média é ${media.toFixed(2)}, e você está ${situacao}.`)

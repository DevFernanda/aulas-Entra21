var nome = "Fernanda"
var valor = 4250.00
var taxa = 3/100
var qtdMeses = 3 // quantidade de tempo mínimo que o usuário deixa o valor na poupança
var acrescimo = (valor * taxa)

if (qtdMeses >= 3) {
    valor = (valor + acrescimo)
}

console.log(`${nome}, seu saldo atual é de R$${valor}, foi feito um acréscimo de 3%.`)
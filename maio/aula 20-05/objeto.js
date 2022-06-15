var carro = { 
    placa: "abc-1234",
    marca: "volkswagen",
    modelo:"gol",
    cor:"vermelha",
        autonomia: function (km, abastecimento){
            console.log((km/abastecimento).toFixed(2))
        } 
}

console.log(carro) // p imprimir todo o objeto

console.log(carro.placa) // imprimir partes do objeto

carro.cor = "preto"

console.log(carro)
carro.autonomia(500,15)
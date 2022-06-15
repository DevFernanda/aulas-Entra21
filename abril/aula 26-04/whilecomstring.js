var contador = 5
var continuar = true
var opcao = "s"

while(opcao.toLocaleLowerCase() == 's'){
    if (contador > 0){
        console.log(`Olá ${contador}`)
    } else {
        opcao = "n"
    }
    contador--
}
    console.log("continua execução")


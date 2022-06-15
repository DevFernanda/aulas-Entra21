function imc (peso,altura){
    var resultado = (peso/(altura*altura)).toFixed(2)
    console.log(resultado)
    if (resultado < 18.5) {
        console.log(`Peso baixo`)
    } else if (resultado <= 24.9) {
        console.log(`Peso normal ou adequado`)
    } else if (resultado <= 29.9) {
        console.log(`Sobrepeso`)
    } else if (resultado <= 34.9) {
        console.log(`Obesidade Grau I`)
    } else if (resultado <= 39.9) {
        console.log(`Obesidade Grau II`)
    } else if (resultado > 40) {
        console.log(`Obesidade Grau III ou Mórbida`)
    }   
}
    

imc (15,1.80)
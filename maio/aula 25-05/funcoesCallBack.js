function um(){
    console.log("Um")
}

function dois(){
    console.log("dois")
}

um()
dois()

function mostraResult(result){
    console.log(`Resultado: ${result}`)
}

function mostraResult2(result){
    console.log(`Resultado2: ${result}`)
}

function soma(n1,n2){
    let resultado = n1+n2
    mostraResult(resultado)
}

soma(10,20)

// função usando callback 

function soma2(n1,n2,callback){
    let resultado = n1 + n2 
    callback(resultado)
}

soma2(100,200, mostraResult)
soma2(100,200, mostraResult2)
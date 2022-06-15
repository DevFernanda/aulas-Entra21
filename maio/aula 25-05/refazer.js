function resultado(resultado) {
    console.log(`teste ${resultado}`)
}

function soma(n1,n2,callback) {
    let result = n1 + n2
    callback(result)
}

soma(100, 200, resultado)
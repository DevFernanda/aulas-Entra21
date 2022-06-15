function ola (){
    console.log("ola")
}

function tchau (){
    console.log("Tchau")
}
function conversa (){
    setTimeout(
        function () {
            console.log("como vai?")    
        }, 3000
    )
}

ola()
conversa()
tchau()


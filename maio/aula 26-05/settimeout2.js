function ola(){
    console.log('ola')
}

function tchau(){
    console.log('tchau')
}

function conversa(){
    console.log('tudo bem?')
}
//function testeSetTimeOut (){
  //  setTimeout(conversa,3000)
// }
function discussao (){
    console.log('sdasdad')
}

function conversao (){
    console.log('conversa muito longa')
}

function testeSetTimeOut (callback, time){
    setTimeout (callback, time)
}

ola()
testeSetTimeOut(conversa, 10000)
testeSetTimeOut(discussao, 7000)
testeSetTimeOut(conversao, 3000)
tchau()
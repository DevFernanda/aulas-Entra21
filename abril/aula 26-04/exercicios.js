var nome = "Fernanda"
var ano_nascimento = 1998
var mes_nascimento = 04
var dia_nascimento = 12

var ano_atual = 2022
var mes_atual = 08
var dia_atual = 26
var idadeanos = ano_atual - ano_nascimento
var idademes = mes_nascimento - mes_atual
var idadedia = dia_nascimento - dia_atual

if (mes_atual <= mes_nascimento) {
    if (dia_atual < dia_nascimento) 
        idadeanos--    
}

console.log (`${nome}, você tem ${idadeanos} anos.`)
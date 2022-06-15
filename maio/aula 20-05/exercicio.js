var cafeCapuccino = {
    descricao: "dolce gusto capuccino",
    preco: "22.0",
    quantidade: "1",
     total: function (){
        return (this.preco * this.quantidade)
    }
}
var cafeChococcino = {
    descricao: "dolce gusto chococcino",
    preco: "27.0",
    quantidade: "1",
        total: function (){
        return (this.preco * this.quantidade)
    }
}
 var cafeAoLeite = {
    descricao: "dolce gusto ao leite",
    preco: "23.0",
    quantidade: "1",
        total: function (){
        return (this.preco * this.quantidade)
    }
 }
 var cafeAmendoa = {
    descricao: "dolce gusto amendoas",
    preco: "17.0",
    quantidade: "1",
        total: function (){
        return (this.preco * this.quantidade)
    }
 }
 var cafeMocaccinoCanela = {
    descricao: "dolce gusto mocaccino canela",
    preco: "25.0",
    quantidade: "1",
        total: function (){
        return (this.preco * this.quantidade)
    }
 }

var array = [cafeCapuccino, cafeChococcino, cafeAoLeite, cafeAmendoa, cafeMocaccinoCanela]
var soma = 0
for (let i=0; i < array.length; i++) {
    soma += array[i].total()
}

console.log(soma)
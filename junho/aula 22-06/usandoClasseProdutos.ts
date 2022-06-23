import Produtos from "./classeProdutos";

let produto1 = new Produtos('Caderno', 50.00, 3)
console.log(`Estoque: ${produto1.getEstoque()}`);
console.log(`Preço com desconto: ${produto1.precoComDesconto(10)}`);
console.log(`Preço com desconto: ${produto1.precoComAcrescimo(5)}`);


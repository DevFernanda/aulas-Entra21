"use strict";
class Product {
    constructor(id, descricao, preco) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
    }
}
let produto1 = new Product(1, 'Feijão', 7.89);
let produto2 = new Product(2, 'Arroz', 5.49);
class ItemVenda {
    constructor(id, produto, qtd) {
        this.id = id;
        this.produto = produto;
        this.qtd = qtd;
    }
}
let item1 = new ItemVenda(1, produto1, 10);
let item2 = new ItemVenda(2, produto2, 6);
console.log(item1);
class Venda {
    constructor(id, itens) {
        this.id = id;
        this.itens = itens;
    }
}
let venda1 = new Venda(1, [item1]);
console.log(venda1, produto1);

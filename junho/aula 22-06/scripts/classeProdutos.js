"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produtos {
    constructor(descricao, valorUnitario, qtdEstoque) {
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
        this.qtdEstoque = qtdEstoque;
    }
    getEstoque() {
        return this.qtdEstoque;
    }
    precoComDesconto(taxa) {
        let precoDesc = this.valorUnitario - (this.valorUnitario * taxa / 100);
        return precoDesc;
    }
    precoComAcrescimo(taxa) {
        let precoAcresc = this.valorUnitario + (this.valorUnitario * taxa / 100);
        return precoAcresc;
    }
}
exports.default = Produtos;

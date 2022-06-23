"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classeProdutos_1 = __importDefault(require("./classeProdutos"));
let produto1 = new classeProdutos_1.default('Caderno', 50.00, 3);
console.log(`Estoque: ${produto1.getEstoque()}`);
console.log(`Preço com desconto: ${produto1.precoComDesconto(10)}`);
console.log(`Preço com desconto: ${produto1.precoComAcrescimo(5)}`);

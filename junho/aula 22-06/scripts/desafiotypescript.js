"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(id, nome, fone, email, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }
    salvar() {
        return `Cliente ${this.nome} salvo com sucesso!`;
    }
    validarDados() {
        if (this.id < 0) {
            console.log(`Informe o id`);
            return false;
        }
        else if (this.fone == '') {
            console.log(`Informe o fone`);
            return false;
        }
        else if (this.email == '') {
            console.log(`Informe o e-mail`);
            return false;
        }
        else if (this.nome == '') {
            console.log(`Informe o nome`);
            return false;
        }
        else if (this.peso < 0) {
            console.log(`Informe o peso`);
            return false;
        }
        else if (this.altura < 0) {
            console.log(`Informe a altura`);
            return false;
        }
        return true;
    }
    calculoImc() {
        return parseFloat((this.peso / (this.altura * this.altura)).toFixed(2));
    }
    imprimirDados() {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Fone: ${this.fone}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`O IMC de ${this.nome} é ${this.calculoImc()}`);
        console.log(` `);
    }
}
exports.Pessoa = Pessoa;

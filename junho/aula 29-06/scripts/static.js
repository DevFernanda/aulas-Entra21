"use strict";
class Conexao {
    constructor() {
        this.database = '';
    }
    static getConexao() {
        return this.path;
    }
}
Conexao.path = '';
let conexao;
conexao = new Conexao();
conexao.database = 'loja';
//console.log(conexao.getConexao());
Conexao.path = 'C:/users/db.json';
console.log(Conexao.getConexao());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Categoria_1 = require("./entity/Categoria");
var Produto_1 = require("./entity/Produto");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "app",
    //entities: [".src/entity/*.ts"],
    entities: [Categoria_1.Categoria, Produto_1.Produto],
    logging: false,
    synchronize: true,
});
dataSource
    .initialize()
    .then(function () {
    console.log("Data Source inicializado");
})
    .catch(function (err) {
    console.log("Erro para inicializar Data Source: ", err);
});
exports.default = dataSource;

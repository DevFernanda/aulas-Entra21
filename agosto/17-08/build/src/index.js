"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dataSource_1 = require("./dataSource");
var app = express();
app.use(express.json());
dataSource_1.default
    .initialize()
    .then(function () {
    console.log("Data Source inicializado");
})
    .catch(function (err) {
    console.log("Erro para inicializar Data Source: ", err);
});
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("Executando em http://localhost:".concat(PORT)); });

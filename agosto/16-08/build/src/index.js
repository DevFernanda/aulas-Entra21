"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var categoriaRotas_1 = require("./categoriaRotas");
var produtoRotas_1 = require("./produtoRotas");
var app = express();
app.use(express.json());
app.use('/categoria', categoriaRotas_1.default);
app.use('/produto', produtoRotas_1.default);
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("Executando em http://localhost:".concat(PORT)); });
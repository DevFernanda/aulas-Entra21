"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var adress_1 = require("./adress");
var user_1 = require("./user");
var app = express();
app.use(express.json());
app.use('/user', user_1.default);
app.use('/adress', adress_1.default);
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("Executando em http://localhost:".concat(PORT)); });

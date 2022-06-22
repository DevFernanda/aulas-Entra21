"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classeempregado_1 = require("./classeempregado");
let emp1 = new classeempregado_1.Empregado("Fernanda", 10, 40);
console.log(emp1);
console.log(emp1.calculaSalario());
emp1.imprimeDados();

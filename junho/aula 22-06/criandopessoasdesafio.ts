import { Pessoa } from "./desafiotypescript";

let pessoa1 = new Pessoa (1, 'Fernanda Mattiello', '47 9 9744 5125', 'mattiello.fer@gmail.com', 68, 1.8)
console.log(pessoa1.validarDados());
console.log(pessoa1.salvar());
pessoa1.imprimirDados();

let pessoa2 = new Pessoa(2, 'André Augusto', '47 9 9230 1202', 'andre.azeredo@gmail.com', 75, 1.80)
console.log(pessoa2.validarDados());
console.log(pessoa2.salvar());
pessoa2.imprimirDados();

let pessoas: Pessoa[] = []
pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(new Pessoa(3, 'Fernanda', '47 9 97445125', 'fer-mattiello@hotmail.com', 50, 1.5))








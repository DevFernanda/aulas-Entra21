// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Meu servidor node');
// });

// server.listen(8080, "localhost", () => {
//     console.log(`Server running at http://localhost:8080`);
// });


const express = require('express') // módulo
const app = express() // exportando os módulos do node

cliente = [
    {
        id: 1,
        nome: "José",
        email: "jose@gmail.com"
    },
    {
        id: 2,
        nome: "Maria",
        email: "mar@gmail.com"  
    }
]

app.get('/consultar', (req, res) => {
    res.send (cliente)
});

app.get('cliente', (req, res) => {
    res.send ('Vc está na página de cadastro de cliente')
});

app.get('/cadastro/produtos', (req, res) => {
    res.send ('Vc está na página de cadastro de produtos')
});

app.get('/cadastro/vendas', (req, res) => {
    res.send ('Vc está na página de cadastro de vendas')
});



app.listen(8080, () => console.log('Executando em http://localhost:8080'))


var {Pool} = require('pg')
var pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'colocarONomeCertoAqui',
    password: 'colocarASenhaCertaAqui',
    port: 'verACerta',
})

pool.query ('SELECT nome from cliente', (err, res) => {
    
        console.log(err, res)
        pool.end()
    });

    app.get('/', (req, res) => {
        res.send (pool)
    });
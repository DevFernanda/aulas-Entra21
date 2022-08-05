const express = require('express');
const { release } = require('os');
const app = express();
const cors = require('cors');

app.use(cors());

var pg = require('pg');
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

// após o // nome de usuário, senha para acessar o servidor 
// depois do @ é o IP que está rodando o banco de dados
// e depois da / nome do banco de dados


app.get('/conectar', (req, res) => {
    pool.connect((err, client,) => {
        if (err) {
            return res.status(401).send({
                message: "erro de conexão",
                erro: err.message
            });
        }
        return res.status(200).send({
            message: "Conectado com sucesso."
        })
    })
})
// res - consulta do banco "solciitação"
// res é como se fosse o them no fetch com jsonserver;
app.get('/clientes', (req, res) => {
    // release libera a conexão com o bco de dados
    pool.connect((err, client, release) => {
        if (err) {
            release()
            return res.status(401).send({
                message: "erro de conexão",
                erro: err.message
            });
        }
        // error: call back que retorna erros para o browser
        // result: retorna os dados da consulta
        client.query('SELECT * from cliente', (error, result) => {
            release();
            if (error) {
                return res.status(500).send({
                    message: "Ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})

app.get('/clientes/:idcliente', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            release()
            return res.status(401).send({
                message: "erro de conexão",
                erro: err.message
            });
        }
        client.query(`select id, nome from cliente where id = ${req.params.idcliente}`, (error, result) => {
            release();
            if (error) {
                return res.status(500).send({
                    message: "Ocorreu erro na consulta",
                    erro: error.message
                })
            }
                if (result.rows.length == 1) {
                    return res.status(200).send(result.rows[0])
                }
                else {
                return res.status(404).send({
                    status: 404,
                    message: "ID não encontrada"
            })
        }
    })
    })
})



app.listen(8080, () => console.log('Executando em http://localhost:8080'))


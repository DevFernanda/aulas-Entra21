const express = require('express');
const {release} = require('os');
const app = express();
const cors = require ('cors');

app.use(cors());

var pg = require ('pg');

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
//const pool = new pg.Pool({connectionString: connectDatabase})

app.get('/conecte', (req,res) => {
    pool.connect((err,client) => {
        if (err) {
            return res.status(401).send ({
                message: 'erro de conexão',
                erro: err.message
            })
        }
            return res.status(200).send('Deu certo')
    })
})

app.get('/clienteNome/:cli.nome', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            release()
            return res.status(401).send({
                message: 'erro de conexão',
                erro: err.message
            })
        }
        client.query(`select cli.nome, ca.marca, ca.placa from carro ca, cliente cli, unir un where nome = ${req.params.cli.nome} and un.id_cliente = cli.id and ca.id = un.id_carro`, (error, result) => {
            release();
            if (error) {
                return res.status(500).send({
                    message: "erro",
                    erro:error.message
                })
            }
                return res.status(200).send(result.rows[0])
        })
    })
})

app.listen(8080, () => console.log('Executando em http://localhost:8080'))
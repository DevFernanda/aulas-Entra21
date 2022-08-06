// const { PRIORITY_LOW, ESRCH } = require('constants')
const express = require('express')
var router = express.Router();
const pg = require('pg')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

// extrair o que está codificado da URL e decodificando


// const strConn = process.env.DATABASE_URL


const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

router.post('/', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                message: 'Conexão não autorizada',
            })
        }
        bcrypt.hash(req.body.senha, 10, (erro, hash) => {
            const sql = 'INSERT into usuarios(nome, email, senha, perfil) values ($1, $2, $3, $4)'
            const dados = [req.body.nome, req.body.email, hash, req.body.perfil]
            client.query(sql, dados, (erro, result) => {
                if (erro) {
                    return res.send({
                        message: "Não foi possível cadastrar o usuário",
                        erro: erro.message
                    })
                }
                if (result) {
                    return res.status(201).send({
                        message: 'Usuário cadastrado com sucesso'
                    })
                }
            })
            release()
        })
    })
})


router.post('/login', (req, res) => {
    pool.connect((err, client, release) => {
        let sql = 'select * from usuarios where email = $1'
        let dados = [req.body.email]
        client.query(sql, dados, (erro, result) => {
            if (result.rowCount > 0) {
                bcrypt.compare(req.body.senha, result.rows[0].senha, (erro, results)=>{
                   if (results){
                       var token = jwt.sign({
                        nome: result.rows[0].nome,
                        email: result.rows[0].email,
                        perfil: result.rows[0].perfil
                       }, process.env.JWT_KEY)
                    return res.send({
                        token: token
                    })
                   }  
                   else {
                       return res.status(403).send({
                            message: 'senha incorreta'
                       })
                   }
                })
            } 
            else {
                res.send({
                    message: "usuário não encontrado"
                })
            }
            
        })
    })
})

module.exports = router;
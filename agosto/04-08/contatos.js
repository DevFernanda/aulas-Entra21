var express = require ('express');
var router = express.Router();
const pg = require('pg');

const strConn = process.env.DATABASE_URL
const pool = new pg.Pool({connectionString: strConn})

    router.get('/', (req, res)=> {
    pool.connect((err, client, release) =>{
        if (err){
            return res.send({
                message: 'Conexão não autorizada',
                erro: err.message
            })
        }
        client.query('select * from contato', (error, result) => {
            if (error){
                return res.send({
                    message: 'Erro ao selecionar contato',
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
        release()
        })
    })


    router.get('/:idcontato', (req, res)=> {
        pool.connect((err, client, release) =>{
            var sql = "select * from contato where id = $1"
            var dados = [req.params.idcontato]
            client.query(sql, dados, (error,result) =>{
                return res.status(201).send(result.rows)
            }) 
            release()
        }) 
    })
    

    router.post('/', (req, res) =>{
        pool.connect((err, client, release)=>{
            var sql = "insert into contato(nome, fone, email) values ($1, $2, $3)"
            var dados = [req.body.name, req.body.phone, req.body.mail]
            client.query(sql, dados, (error, result) => {
                return res.status(201).send({
                    message: 'Contato criado com sucesso'
                })
            })
            release()
        })
    })

    router.put('/:idcontato', (req, res) => {
        pool.connect((err, client, release) => {
            var sql = "update contato set nome = $1, fone = $2, email = $3 where id = $4"
            var dados = [req.body.nome, req.body.fone, req.body.email, req.params.idcontato]
            client.query(sql, dados, (error, result) => {
                
                })
                return res.status(200).send({
                    message:'Contato alterado com sucesso',
                    idalterado: req.params.idcontato,
                    contatoalterado: dados
            })
            release()
        })
    })
    
    router.delete('/:idcontato', (req, res) => {
        pool.connect((err, client, release) =>{
            let sql = 'delete from contato where id = $1'
            client.query(sql, [req.params.idcontato], (error, result)=>{
                return res.send({
                    message: 'Contato exclído com sucesso',
                    idcontato: req.params.idcontato // o nome dessa variavel é o q está no contatos/:
            })
        })
        release()
        })
    })

    module.exports = router;
    
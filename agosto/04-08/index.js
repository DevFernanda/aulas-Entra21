const express = require('express');
const app = express();
const pg = require('pg');
const cors = require ('cors')
const contatos = require ('./contatos')
const usuarios = require ('./usuarios')

// criar os app use para que a requisição "encontre" o body
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use('/contatos', contatos)
app.use('/usuarios', usuarios)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`servidor executando em http://localhost:${PORT}`)
})


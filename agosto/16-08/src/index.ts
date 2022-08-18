import * as express from "express"
 import categoria from './categoriaRotas'
 import produto from './produtoRotas'
const app = express ()

app.use(express.json())

app.use('/categoria', categoria)
app.use('/produto', produto)



const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`Executando em http://localhost:${PORT}`)})
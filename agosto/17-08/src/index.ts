import * as express from "express"
import dataSource from "./dataSource";
const app = express ()
app.use(express.json())

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado");
        
    })
    .catch((err)=> {
        console.log("Erro para inicializar Data Source: ", err);
    })

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`Executando em http://localhost:${PORT}`)})
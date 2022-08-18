import {DataSource} from "typeorm"
import { Categoria } from "./entity/Categoria"
import { Produto } from "./entity/Produto"


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "app",
    //entities: [".src/entity/*.ts"],
    entities: [Categoria, Produto],
    logging: false, //sql gerados do banco
    synchronize: true,
})

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado");
        
    })
    .catch((err)=> {
        console.log("Erro para inicializar Data Source: ", err);
    })

export default dataSource
import {DataSource} from "typeorm"
import Carrinho from "./entity/Carrinho"
import Cliente from "./entity/Cliente"
import Produto from "./entity/Produto"
import Venda from "./entity/Venda"


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "app",
    //entities: [".src/entity/*.ts"],
    entities: [Cliente, Carrinho, Produto, Venda],
    logging: false, //sql gerados do banco
    synchronize: true,
})

export default dataSource


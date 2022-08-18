import {DataSource} from "typeorm"
import { Adress } from "./entity/Adress"
import { User } from "./entity/User"


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "app",
    //entities: [".src/entity/*.ts"],
    entities: [User, Adress],
    logging: false, //sql gerados do banco
    synchronize: true,
})

export default dataSource
import {DataSource} from "typeorm"
import { Medico } from "./entity/medicos"


const data = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "app",
    //entities: [".src/entity/*.ts"],
    entities: [Medico],
    logging: false, //sql gerados do banco
    synchronize: true,
})

export default data
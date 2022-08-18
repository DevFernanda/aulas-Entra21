"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Adress_1 = require("./entity/Adress");
var User_1 = require("./entity/User");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "app",
    //entities: [".src/entity/*.ts"],
    entities: [User_1.User, Adress_1.Adress],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;

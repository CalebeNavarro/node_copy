import { DataSource } from "typeorm";
require('dotenv').config()

const host = process.env.NODE_ENV === "dockerdev" ? "postgres" : "localhost";

export const AppDataSource = new DataSource({
    type: "postgres",
    host,
    port: 5434,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: []
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
import { Options } from "@mikro-orm/core";
import { MySqlDriver } from "@mikro-orm/mysql";
import * as dotenv from "dotenv";

dotenv.config();

// Configura as opções do MikroORM para conectar ao banco de dados MySQL usando variáveis de ambiente definidas no .env
export default {
    driver: MySqlDriver,
    port: parseInt(process.env.DB_PORT || '3306'),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/**/*.entity.ts'],
    migrations: {
        path: './migrations',
    },
} as Options<MySqlDriver>;
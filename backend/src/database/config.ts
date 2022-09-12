import path from 'path';
import { Sequelize } from 'sequelize';
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASS;
const dbPort = +process.env.DB_PORT;

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "mysql",
  port: dbPort,
  define: {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
});



export default db;

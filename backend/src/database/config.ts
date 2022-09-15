import path from 'path';
import {Sequelize} from 'sequelize'
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASS;
const dbPort = +process.env.DB_PORT;

const db = new Sequelize('midall', 'root', 'thiago123', {
  host: '127.0.0.1',
  dialect: "mysql",
  port: 3306,
  define: {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
});



export default db;

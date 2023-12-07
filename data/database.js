import sqlite3 from "sqlite3";
import Sequelize from "sequelize";

const Database = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  dialectModule: sqlite3
});
 
export default Database;
import Sequelize from "sequelize";
import Database from '../database';

const SheetModel = Database.define('sheets', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pages: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

export default SheetModel;
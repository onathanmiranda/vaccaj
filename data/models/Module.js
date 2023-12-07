import Sequelize from "sequelize";
import Database from '../database';

const ModuleModel = Database.define('modules', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  about: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

export default ModuleModel;
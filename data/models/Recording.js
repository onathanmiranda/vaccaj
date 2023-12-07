import Sequelize from "sequelize";
import Database from '../database';

const RecordingModel = Database.define('recordings', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  mime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accompaniment: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  vocals: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

export default RecordingModel;
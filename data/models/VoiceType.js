import Sequelize from "sequelize";
import Database from '../database';

const VoiceTypeModel = Database.define("voice_types", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default VoiceTypeModel;
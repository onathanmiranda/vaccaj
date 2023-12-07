import Sequelize from "sequelize";
import Database from '../database';

const SongModel = Database.define('songs', {
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
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.STRING
  },
  instructions: {
    type: Sequelize.STRING
  },
  lyrics: {
    type: Sequelize.STRING
  }
});

export default SongModel;
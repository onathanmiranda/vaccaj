import Sequelize from "sequelize";
import Database from '../database';

const LessonModel = Database.define('lessons', {
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

export default LessonModel;
import ModuleModel from '../models/Module';
import LessonModel from '../models/Module';
import { Sequelize } from 'sequelize';

const ModulesController = {
  getAll: ({ where = {} } = {}) => ModuleModel.findAll({
    attributes: ['id', 'title', 'slug', 'about'],
    where
  })
};

export default ModulesController
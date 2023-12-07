import ModuleModel from '../../../data/models/Module';
import LessonModel from '../../../data/models/Lesson';
import { Sequelize } from 'sequelize';

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const where = searchParams.size ? Object.fromEntries(searchParams.entries()) : {};
  
  let modules = await ModuleModel.findAll({
    attributes: ['id', 'title', 'slug', 'about'],
    where,
    include: [{
      model: LessonModel,
      where: { moduleId: Sequelize.col('module.id') }
    }]
  });

  return Response.json(modules)

  return Promise.all(modules.map(async (modulo) => {
    const lessons = await LessonModel.findAll({
      attributes: ['id', 'title'],
      where: {
        moduleId: modulo.id
      }
    });
    
    return {
      ...modulo.dataValues
    }
  })).then((modules) => Response.json(modules));
}
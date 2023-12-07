import ModuleModel from '../../../data/models/Module';

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const where = searchParams.size ? Object.fromEntries(searchParams.entries()) : {};
  
  const modules = await ModuleModel.findAll({
    attributes: ['id', 'title', 'slug', 'about'],
    where
  });

  return Response.json(modules);
}
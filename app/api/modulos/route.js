import ModulesController from '../../../data/controllers/Modules';

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const where = searchParams.size ? Object.fromEntries(searchParams.entries()) : {};
  const modules = await ModulesController.getAll({ where });
  return modules;
}
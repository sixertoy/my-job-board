import { boardRoute, homeRoute, notesRoute, projectsRoute } from './routes';

function mapRouteOrderToObject(obj, index) {
  return { ...obj, order: index };
}

function mapSlugToRoutesObject(obj) {
  return { ...obj, slug: '' };
}

const orderedRoutes = [
  boardRoute,
  homeRoute,
  notesRoute,
  projectsRoute,
  //
];
const routes = orderedRoutes
  .map(mapRouteOrderToObject)
  .map(mapSlugToRoutesObject);

export default routes;

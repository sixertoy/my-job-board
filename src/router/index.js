import { slugify } from '@iziges/napper-core/lib/strings';

import { boardRoute, homeRoute, notesRoute, projectsRoute } from './routes';

function mapRouteOrderToObject(obj, index) {
  return { ...obj, order: index };
}

function mapSlugToRoutesObject(obj) {
  const str = `${obj.order}-${obj.label}`;
  return { ...obj, slug: slugify(str) };
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

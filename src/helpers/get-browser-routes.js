import ROUTES from '../routes';

function getMenuItemsFromRoutes(routes) {
  return routes.reduce((acc, current) => {
    if (!current.icon) return acc;
    const parsed = [{ ...current, path: current.path }];
    return [...acc, ...parsed];
  }, []);
}

const getBrowserRoutes = () => getMenuItemsFromRoutes(ROUTES);

export default getBrowserRoutes;

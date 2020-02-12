import ROUTES from '../router';

function getMenuItemsFromRoutes(routes) {
  return routes.reduce((acc, { basepath, icon, label }) => {
    if (!icon) return acc;
    const item = { icon, label, path: basepath };
    return [...acc, item];
  }, []);
}

function getBrowserRoutesFromRoutes(routes) {
  return routes.reduce((acc, { basepath, params, ...rest }) => {
    const item = { ...rest, path: `${basepath}${params}` };
    return [...acc, item];
  }, []);
}

export const getMenuItems = () => getMenuItemsFromRoutes(ROUTES);

export const getBrowserRoutes = () => getBrowserRoutesFromRoutes(ROUTES);

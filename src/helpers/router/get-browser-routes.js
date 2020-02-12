function getBrowserRoutes(routes) {
  return routes.reduce((acc, { basepath, params, ...rest }) => {
    const item = { ...rest, path: `${basepath}${params}` };
    return [...acc, item];
  }, []);
}

export default getBrowserRoutes;

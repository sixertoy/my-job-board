function getMenuItems(routes) {
  return routes.reduce((acc, { basepath, icon, label }) => {
    if (!icon) return acc;
    const item = { icon, label, path: basepath };
    return [...acc, item];
  }, []);
}

export default getMenuItems;

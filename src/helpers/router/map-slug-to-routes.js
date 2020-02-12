import { slugify } from '@iziges/napper-core/lib/strings';

function mapSlugToRoutes(obj) {
  const str = `${obj.order}-${obj.label}`;
  return { ...obj, slug: slugify(str) };
}

export default mapSlugToRoutes;

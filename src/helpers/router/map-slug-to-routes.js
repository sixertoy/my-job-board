import { slugify } from '@nappr/nappr-core/lib/strings';

function mapSlugToRoutes(obj) {
  const str = `${obj.order}-${obj.label}`;
  return { ...obj, slug: slugify(str) };
}

export default mapSlugToRoutes;

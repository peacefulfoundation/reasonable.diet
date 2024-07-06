import { SITE } from '@/consts';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const recipes = await getCollection('recipes');

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: recipes.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      link: `/recipes/${item.slug}/`,
    })),
  });
}

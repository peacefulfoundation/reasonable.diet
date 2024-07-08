import { SITE } from '@/consts';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const recipes = (await getCollection('recipes')).sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    trailingSlash: false,
    items: recipes.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/recipes/${item.slug}/`,
    })),
  });
}

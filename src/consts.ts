import type { Links, Site, Socials } from '@/types';

export const SITE: Site = {
  TITLE: 'reasonable.diet',
  DESCRIPTION: 'Budget-friendly recipes for university students.',
  AUTHOR: 'peacefulfoundation.org',
};

// Links
export const LINKS: Links = [
  {
    TEXT: 'Recipes',
    HREF: '/recipes',
  },
  {
    TEXT: 'Categories',
    HREF: '/categories',
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'GitHub',
    ICON: 'github',
    TEXT: 'peacefulfoundation',
    HREF: 'https://github.com/peacefulfoundation/reasonable.diet'
  }
]
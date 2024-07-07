import type { Links, Page, Site, Socials } from '@/types';

// Global
export const SITE: Site = {
  TITLE: 'reasonable.diet',
  DESCRIPTION: 'Budget-friendly recipes for university students.',
  AUTHOR: 'peacefulfoundation.org',
};

// Search
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search for your favorite budget-friendly recipes!'
}

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
  },
  {
    NAME: 'Discord',
    ICON: 'discord',
    TEXT: 'quiteasily.org',
    HREF: 'https://discord.gg/uvYhwtznTK',
  }
]
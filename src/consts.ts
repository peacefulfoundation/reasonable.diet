import type { Page, Site, Socials } from '@/types';

// Global
export const SITE: Site = {
  TITLE: 'reasonable.diet',
  DESCRIPTION: 'Budget-friendly recipes for university students.',
  AUTHOR: 'peacefulfoundation.org',
};

// Recipes
export const RECIPES: Page = {
  TITLE: 'Recipes',
  DESCRIPTION: 'A list of budget-friendly recipes to choose from.',
};

// Search
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search for your favorite budget-friendly recipes!',
};

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'GitHub',
    ICON: 'github',
    TEXT: 'peacefulfoundation',
    HREF: 'https://github.com/peacefulfoundation/reasonable.diet',
  },
  {
    NAME: 'Discord',
    ICON: 'discord',
    TEXT: 'quiteasily.org',
    HREF: 'https://discord.gg/uvYhwtznTK',
  },
];

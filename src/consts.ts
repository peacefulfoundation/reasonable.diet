import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "reasonable.diet",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/boogerbuttcheeks",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/trevortylerlee",
  },
];

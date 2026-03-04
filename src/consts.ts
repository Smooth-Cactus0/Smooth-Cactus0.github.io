import type { Site, Page, Links, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Alexy Louis",
  DESCRIPTION: "ML Engineer & Data Scientist — building end-to-end ML systems across CV, NLP, tabular, and astrophysics.",
  AUTHOR: "Alexy Louis",
};

export const WORK: Page = {
  TITLE: "About",
  DESCRIPTION: "Background and experience.",
};

export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on ML, experiments, and lessons learned.",
};

export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "ML and data science projects across computer vision, NLP, tabular data, and astrophysics.",
};

export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects.",
};

export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "About",
    HREF: "/work",
  },
];

export const SOCIALS: Socials = [
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Smooth-Cactus0",
    HREF: "https://github.com/Smooth-Cactus0",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "alexy-louis",
    HREF: "https://www.linkedin.com/in/alexy-louis-19a5a9262/",
  },
  {
    NAME: "Kaggle",
    ICON: "kaggle",
    TEXT: "alexycactus",
    HREF: "https://www.kaggle.com/alexycactus",
  },
];

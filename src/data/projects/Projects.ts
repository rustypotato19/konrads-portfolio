import type { Project } from "../../types/types";

export const projectsData: Project[] = [
  {
    title: "full-stack portfolio website (you're here!)",
    description:
      "modern personal website built with react, typescript and tailwind, deployed with nginx and reverse proxy setup. hosted on a personally configured home server",
    stack: ["react", "typescript", "tailwind", "nginx"],
    primary_lang: "typescript",
    keywords: ["portfolio", "personal website", "full-stack", "react", "typescript", "tailwind", "nginx", "home server", "self-hosting",],
    github: "https://github.com/rustypotato19/konrads-portfolio",
    featured: false,
  },

  {
    title: "custom exponential number class",
    description:
      "c++ class for representing and performing arithmetic on numbers in exponential form, designed to handle extremely large numbers.",
    stack: ["c++", "numerical methods"],
    primary_lang: "c++",
    keywords: ["c++", "numerical methods", "arithmetic", "large numbers", "exponential notation", "mathematics", "maths", "math",],
    github: "https://github.com/rustypotato19/ExponentialNumberCpp",
    featured: false,
  },

  {
    title: "gamified environmental awareness platform",
    description:
      "research-backed interactive web application exploring gamification as a method of increasing environmental engagement.",
    stack: ["react", "express", "sql", "ux research"],
    primary_lang: "typescript",
    keywords: ["gamification", "environment", "environmental awareness", "research", "ux research", "web application", "react", "express", "sql", "dissertation",],
    github: "https://github.com/rustypotato19/gamification-experiment",
    live: "https://dissertation.aboutkonrad.com",
    featured: false,
  },

  {
    title: "simple times tables web app",
    description: 'a "no-bs" times tables practice web app',
    stack: ["react", "express", "sql", "ux research"],
    primary_lang: "typescript",
    keywords: ["education", "maths", "times tables", "practice", "learning", "gamification", "web app", "react",],
    github: "https://github.com/rustypotato19/react-times-tables-app",
    live: "https://tt.aboutkonrad.com",
    featured: true,
  },
];
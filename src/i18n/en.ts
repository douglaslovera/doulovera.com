export const en = {
  lang: "en",
  nav: {
    experience: "Experience",
    projects: "Projects",
    about: "About",
  },
  hero: {
    name: "Douglas Lovera",
    role: "Frontend Developer",
    description:
      "I craft fast, accessible, and visually sharp interfaces. I care about the details that make the difference.",
    resumeBtn: "Resume",
    githubBtn: "GitHub",
    linkedinBtn: "LinkedIn",
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Rhinolabs",
        role: "Frontend Developer",
        period: "2022 — Present",
        description:
          "Working on high-impact products used by thousands of users. Building component systems, improving performance, and collaborating with product and design teams to ship features that matter.",
      },
      {
        company: "Freelance",
        role: "Web Developer",
        period: "2020 — 2022",
        description:
          "Designed and built websites and web apps for clients across different industries. End-to-end responsibility: from discovery and design to development and deployment.",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    githubBtn: "GitHub",
    previewBtn: "Live Preview",
    items: [
      {
        title: "Project Alpha",
        description:
          "A full-featured web application built with modern tooling. Focused on performance and user experience with a clean, accessible interface.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "/assets/rhinolabs.jpg",
        github: "https://github.com/doulovera",
        preview: "https://example.com",
      },
      {
        title: "Project Beta",
        description:
          "An open-source tool that helps developers automate repetitive tasks. Used by developers worldwide to save time and reduce errors.",
        technologies: ["Node.js", "CLI", "TypeScript"],
        image: "/assets/dl.jpg",
        github: "https://github.com/doulovera",
        preview: null,
      },
    ],
  },
  moreProjects: {
    title: "More Projects",
    githubBtn: "GitHub",
    previewBtn: "Preview",
    items: [
      {
        title: "Side Project One",
        technologies: ["Astro", "Tailwind"],
        github: "https://github.com/doulovera",
        preview: "https://example.com",
      },
      {
        title: "Side Project Two",
        technologies: ["Vue", "Pinia"],
        github: "https://github.com/doulovera",
        preview: null,
      },
      {
        title: "Side Project Three",
        technologies: ["React", "Firebase"],
        github: null,
        preview: "https://example.com",
      },
      {
        title: "Side Project Four",
        technologies: ["CLI", "Node.js"],
        github: "https://github.com/doulovera",
        preview: null,
      },
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I'm a frontend developer based in [City], passionate about crafting interfaces that are both beautiful and functional. I've been building for the web since [year], and I still get excited every time a layout clicks into place.",
      "I love working at the intersection of design and engineering — close enough to the pixels to care about them, technical enough to make them move. I'm particularly interested in design systems, animation, and developer experience.",
      "Outside of work, I enjoy [hobby], [hobby], and occasionally [hobby]. I believe great software comes from great teams, and I'm always looking to collaborate with people who care.",
    ],
  },
  footer: {
    resumeBtn: "Resume",
    githubBtn: "GitHub",
    linkedinBtn: "LinkedIn",
    credit: "Designed & built by Douglas Lovera",
  },
};

export type Translations = typeof en;

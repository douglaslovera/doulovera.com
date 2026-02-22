import type { Translations } from "./en";

export const es: Translations = {
  lang: "es",
  nav: {
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
  },
  hero: {
    name: "Douglas Lovera",
    role: "Desarrollador Frontend",
    description:
      "Creo interfaces rápidas, accesibles y visualmente precisas. Me importan los detalles que marcan la diferencia.",
    resumeBtn: "Currículum",
    githubBtn: "GitHub",
    linkedinBtn: "LinkedIn",
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        company: "Rhinolabs",
        role: "Desarrollador Frontend",
        period: "2022 — Presente",
        description:
          "Trabajando en productos de alto impacto usados por miles de usuarios. Construyendo sistemas de componentes, mejorando el rendimiento y colaborando con equipos de producto y diseño.",
      },
      {
        company: "Freelance",
        role: "Desarrollador Web",
        period: "2020 — 2022",
        description:
          "Diseñé y desarrollé sitios web y aplicaciones para clientes de distintas industrias. Responsabilidad end-to-end: desde el descubrimiento y diseño hasta el desarrollo y despliegue.",
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    githubBtn: "GitHub",
    previewBtn: "Ver en vivo",
    items: [
      {
        title: "Proyecto Alpha",
        description:
          "Una aplicación web completa construida con herramientas modernas. Enfocada en el rendimiento y la experiencia de usuario con una interfaz limpia y accesible.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "/assets/rhinolabs.jpg",
        github: "https://github.com/doulovera",
        preview: "https://example.com",
      },
      {
        title: "Proyecto Beta",
        description:
          "Una herramienta open-source que ayuda a los desarrolladores a automatizar tareas repetitivas. Usada por desarrolladores de todo el mundo.",
        technologies: ["Node.js", "CLI", "TypeScript"],
        image: "/assets/dl.jpg",
        github: "https://github.com/doulovera",
        preview: null,
      },
    ],
  },
  moreProjects: {
    title: "Más Proyectos",
    githubBtn: "GitHub",
    previewBtn: "Preview",
    items: [
      {
        title: "Proyecto Secundario Uno",
        technologies: ["Astro", "Tailwind"],
        github: "https://github.com/doulovera",
        preview: "https://example.com",
      },
      {
        title: "Proyecto Secundario Dos",
        technologies: ["Vue", "Pinia"],
        github: "https://github.com/doulovera",
        preview: null,
      },
      {
        title: "Proyecto Secundario Tres",
        technologies: ["React", "Firebase"],
        github: null,
        preview: "https://example.com",
      },
      {
        title: "Proyecto Secundario Cuatro",
        technologies: ["CLI", "Node.js"],
        github: "https://github.com/doulovera",
        preview: null,
      },
    ],
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy un desarrollador frontend basado en [Ciudad], apasionado por crear interfaces que sean tanto hermosas como funcionales. Llevo desarrollando para la web desde [año], y todavía me emociona cuando un layout encaja perfectamente.",
      "Me encanta trabajar en la intersección entre diseño e ingeniería — lo suficientemente cerca de los píxeles para que me importen, y lo suficientemente técnico para hacerlos moverse. Me interesan especialmente los sistemas de diseño, la animación y la experiencia del desarrollador.",
      "Fuera del trabajo, disfruto de [hobbie], [hobbie] y ocasionalmente [hobbie]. Creo que el gran software viene de los grandes equipos, y siempre busco colaborar con personas que se preocupan.",
    ],
  },
  footer: {
    resumeBtn: "Currículum",
    githubBtn: "GitHub",
    linkedinBtn: "LinkedIn",
    credit: "Diseñado y construido por Douglas Lovera",
  },
};

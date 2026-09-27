# 🍕 doulovera.com

My personal site, where I show my projects and things about me.

## POCs

Posts in `/pocs` come from Markdown files in `src/content/pocs`. The filename becomes the URL slug. For example, `first-experiment.md` is available at `/pocs/first-experiment`.

Each file needs a title and creation date:

```md
---
title: "A first experiment"
createdAt: 2026-09-27
---

Write the post here.
```

To add an optional thumbnail, put it in `public/pocs` and add its root-relative URL to the frontmatter, for example `thumbnail: "/pocs/first-experiment.svg"`.

The site was built using [🚀 Astro](https://astro.build/), using my own styles.

## Tools

😀 [Icônes](https://icones.js.org/) for the icons

## 📦 Deployment

The deploy is in [Vercel](https://vercel.com/), at [doulovera.com](https://doulovera.com).

```bash
$ npm install
$ npm run dev
```

<br />

---

[🌐 Site](https://doulovera.com/) | [💼 Linkedin](https://www.linkedin.com/in/douglaslovera/)

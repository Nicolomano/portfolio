// Genera public/sitemap.xml a partir de las rutas y los proyectos.
// Corre antes de cada build (ver "build" en package.json), así el sitemap
// nunca queda desactualizado cuando se agrega un proyecto.
//
// Cada página aparece en los dos idiomas, con sus alternativas hreflang.

import { writeFileSync } from "node:fs";
import projects from "../src/data/projects.js";
import { paths, SITE_URL } from "../src/i18n/paths.js";

const pages = [
  ...Object.keys(paths.es).map((key) => ({ es: paths.es[key], en: paths.en[key] })),
  ...projects.map(({ id }) => ({
    es: `${paths.es.projects}/${id}`,
    en: `${paths.en.projects}/${id}`,
  })),
];

const url = (path) => `${SITE_URL}${path}`;

const alternates = (page) =>
  [
    `    <xhtml:link rel="alternate" hreflang="es" href="${url(page.es)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${url(page.en)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(page.es)}"/>`,
  ].join("\n");

const entries = pages
  .flatMap((page) => [page.es, page.en].map((loc) => ({ loc, page })))
  .map(({ loc, page }) => `  <url>\n    <loc>${url(loc)}</loc>\n${alternates(page)}\n  </url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${pages.length * 2} URLs`);

// Rutas por idioma. Sin dependencias de React: también las usa
// scripts/sitemap.mjs al hacer el build.

export const SITE_URL = "https://nicolasromano.vercel.app";

// Español en la raíz; inglés con el prefijo /en.
export const paths = {
  es: { home: "/", projects: "/proyectos", about: "/sobre-mi", contact: "/contacto" },
  en: { home: "/en", projects: "/en/projects", about: "/en/about", contact: "/en/contact" },
};

export function getLang(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

// La misma página en el otro idioma (los ids de proyecto no cambian).
// Devuelve null si la ruta no es una página conocida (por ejemplo, un 404).
export function translatePath(pathname, to) {
  const from = getLang(pathname);
  const current = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  const detailPrefix = `${paths[from].projects}/`;
  if (current.startsWith(detailPrefix)) {
    return `${paths[to].projects}/${current.slice(detailPrefix.length)}`;
  }
  const page = Object.keys(paths[from]).find((key) => paths[from][key] === current);
  return page ? paths[to][page] : null;
}

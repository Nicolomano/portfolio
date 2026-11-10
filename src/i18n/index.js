import { useLocation } from "react-router-dom";
import { getProjects } from "../lib/projects.js";
import ui from "./ui.js";

// Español en la raíz; inglés con el prefijo /en.
export const paths = {
  es: { home: "/", projects: "/proyectos", about: "/sobre-mi", contact: "/contacto" },
  en: { home: "/en", projects: "/en/projects", about: "/en/about", contact: "/en/contact" },
};

export function getLang(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

// La misma página en el otro idioma (los ids de proyecto no cambian).
export function switchLangPath(pathname) {
  const from = getLang(pathname);
  const to = from === "es" ? "en" : "es";
  const current = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  const detailPrefix = `${paths[from].projects}/`;
  if (current.startsWith(detailPrefix)) {
    return `${paths[to].projects}/${current.slice(detailPrefix.length)}`;
  }
  const page = Object.keys(paths[from]).find((key) => paths[from][key] === current);
  return paths[to][page ?? "home"];
}

// Idioma actual (según la URL), textos, rutas y proyectos traducidos.
export function useI18n() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  return {
    lang,
    t: ui[lang],
    path: paths[lang],
    projectPath: (id) => `${paths[lang].projects}/${id}`,
    projects: getProjects(lang),
  };
}

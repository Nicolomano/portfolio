import { useLocation } from "react-router-dom";
import { getProjects } from "../lib/projects.js";
import { getLang, paths, translatePath } from "./paths.js";
import ui from "./ui.js";

export { getLang, paths, SITE_URL } from "./paths.js";

// La misma página en el otro idioma; si no es una página conocida, el inicio.
export function switchLangPath(pathname) {
  const to = getLang(pathname) === "es" ? "en" : "es";
  return translatePath(pathname, to) ?? paths[to].home;
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

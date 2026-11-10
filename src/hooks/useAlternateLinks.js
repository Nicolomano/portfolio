import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLang, SITE_URL, translatePath } from "../i18n/paths.js";

// Crea, actualiza o borra un <link> del <head>.
function setLink(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!attrs) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
}

// URL canónica y versiones en cada idioma (hreflang) de la página actual,
// para que Google asocie /proyectos con /en/projects, etc.
// En páginas desconocidas (404) se quitan.
export default function useAlternateLinks() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = getLang(pathname);
    const es = translatePath(pathname, "es");
    const en = translatePath(pathname, "en");
    const known = es !== null && en !== null;
    const url = (path) => `${SITE_URL}${path}`;

    setLink('link[rel="canonical"]', known && { rel: "canonical", href: url(lang === "es" ? es : en) });
    setLink('link[rel="alternate"][hreflang="es"]', known && { rel: "alternate", hreflang: "es", href: url(es) });
    setLink('link[rel="alternate"][hreflang="en"]', known && { rel: "alternate", hreflang: "en", href: url(en) });
    setLink('link[rel="alternate"][hreflang="x-default"]', known && { rel: "alternate", hreflang: "x-default", href: url(es) });
  }, [pathname]);
}

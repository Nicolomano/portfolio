import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useI18n } from "../i18n/index.js";
import useAlternateLinks from "../hooks/useAlternateLinks.js";

export default function Layout() {
  const { pathname } = useLocation();
  const { lang, t } = useI18n();
  useAlternateLinks();

  // Al cambiar de página, volver arriba.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // <html lang> según el idioma de la URL (lectores de pantalla, traductores).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
      <a
        href="#contenido"
        className="label sr-only z-30 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        {t.skipToContent}
      </a>
      <Navbar />
      <main id="contenido" className="shell flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

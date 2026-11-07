import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  // Al cambiar de página, volver arriba.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
      <a
        href="#contenido"
        className="label sr-only z-30 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" className="shell flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import { Link, NavLink, useLocation } from "react-router-dom";
import { switchLangPath, useI18n } from "../i18n/index.js";

// NavLink agrega aria-current="page" solo; acá le damos el estilo activo.
const linkClass = ({ isActive }) =>
  `transition-colors duration-150 ${
    isActive
      ? "text-accent-ink underline decoration-accent decoration-2 underline-offset-[6px]"
      : "hover:text-accent-ink"
  }`;

export default function Navbar() {
  const { pathname } = useLocation();
  const { lang, t, path } = useI18n();
  const otherLang = lang === "es" ? "en" : "es";

  const links = [
    { to: path.projects, label: t.nav.projects },
    { to: path.about, label: t.nav.about },
    { to: path.contact, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-ink bg-paper">
      <nav
        aria-label={t.nav.label}
        className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3"
      >
        <NavLink to={path.home} end className="label flex items-center gap-2.5 font-bold">
          <span aria-hidden="true" className="bg-ink px-1.5 py-0.5 text-paper">
            NR
          </span>
          Nicolás Romano
        </NavLink>

        <ul className="label flex items-center gap-5 sm:gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to={switchLangPath(pathname)}
              hrefLang={otherLang}
              lang={otherLang}
              aria-label={t.switchLang.label}
              className="border border-ink px-1.5 py-0.5 transition-colors duration-150 hover:bg-ink hover:text-paper"
            >
              {t.switchLang.text}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

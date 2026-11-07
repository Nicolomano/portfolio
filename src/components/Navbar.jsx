import { NavLink } from "react-router-dom";

const links = [
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
];

// NavLink agrega aria-current="page" solo; acá le damos el estilo activo.
const linkClass = ({ isActive }) =>
  `transition-colors duration-150 ${
    isActive
      ? "text-accent-ink underline decoration-accent decoration-2 underline-offset-[6px]"
      : "hover:text-accent-ink"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink bg-paper">
      <nav
        aria-label="Principal"
        className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3"
      >
        <NavLink to="/" className="label flex items-center gap-2.5 font-bold">
          <span aria-hidden="true" className="bg-ink px-1.5 py-0.5 text-paper">
            NR
          </span>
          Nicolás Romano
        </NavLink>

        <ul className="label flex gap-5 sm:gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";

const base =
  "label inline-flex items-center gap-3 border px-5 py-3.5 text-[0.8125rem] transition-colors duration-200";

const variants = {
  // El naranja aparece solo en el hover del botón principal.
  primary:
    "border-ink bg-ink text-paper hover:border-accent hover:bg-accent hover:text-ink",
  secondary: "border-ink text-ink hover:bg-ink hover:text-paper",
};

// Botón-link: usa <Link> para rutas internas (`to`) y <a> para archivos o URLs (`href`).
export default function Cta({ to, href, variant = "primary", children, ...rest }) {
  const className = `${base} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}

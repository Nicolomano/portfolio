import { Link, useLocation } from "react-router-dom";
import Cta from "../components/Cta";
import usePageMeta from "../hooks/usePageMeta";

const linkClass = "underline underline-offset-4 transition-colors duration-150 hover:text-accent-ink";

export default function NotFound() {
  const { pathname } = useLocation();
  usePageMeta("Página no encontrada · Nicolás Romano");

  return (
    <section className="py-10 lg:py-16">
      <p
        aria-hidden="true"
        className="text-[10rem] leading-[0.8] font-black tracking-[-0.03em] font-stretch-extra-condensed lg:text-[16rem]"
      >
        404
      </p>
      <h1 className="mt-8 max-w-4xl text-4xl leading-[0.95] font-extrabold tracking-[-0.035em] sm:text-6xl">
        Código de repuesto no encontrado.
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
        No hay nada en <code className="font-mono text-base break-all text-ink">{pathname}</code>.
        Puede que el link esté mal escrito. Probá con{" "}
        <Link to="/proyectos" className={linkClass}>proyectos</Link>,{" "}
        <Link to="/sobre-mi" className={linkClass}>sobre mí</Link> o{" "}
        <Link to="/contacto" className={linkClass}>contacto</Link>.
      </p>
      <div className="mt-8">
        <Cta to="/">Volver al inicio</Cta>
      </div>
    </section>
  );
}

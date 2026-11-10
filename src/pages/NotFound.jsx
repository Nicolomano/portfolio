import { Link, useLocation } from "react-router-dom";
import Cta from "../components/Cta";
import usePageMeta from "../hooks/usePageMeta";
import { useI18n } from "../i18n/index.js";

const linkClass = "underline underline-offset-4 transition-colors duration-150 hover:text-accent-ink";

export default function NotFound() {
  const { pathname } = useLocation();
  const { t, path } = useI18n();
  const text = t.notFound;
  usePageMeta(text.metaTitle);

  return (
    <section className="py-10 lg:py-16">
      <p
        aria-hidden="true"
        className="text-[10rem] leading-[0.8] font-black tracking-[-0.03em] font-stretch-extra-condensed lg:text-[16rem]"
      >
        404
      </p>
      <h1 className="mt-8 max-w-4xl text-4xl leading-[0.95] font-extrabold tracking-[-0.035em] sm:text-6xl">
        {text.title}
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
        {text.nothingAt}{" "}
        <code className="font-mono text-base break-all text-ink">{pathname}</code>. {text.tryLinks}{" "}
        <Link to={path.projects} className={linkClass}>{text.projects}</Link>,{" "}
        <Link to={path.about} className={linkClass}>{text.about}</Link> {text.or}{" "}
        <Link to={path.contact} className={linkClass}>{text.contact}</Link>.
      </p>
      <div className="mt-8">
        <Cta to={path.home}>{text.backHome}</Cta>
      </div>
    </section>
  );
}

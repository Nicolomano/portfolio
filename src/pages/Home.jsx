import { Link } from "react-router-dom";
import profile from "../data/profile.js";
import Cta from "../components/Cta";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SpecList from "../components/SpecList";
import usePageMeta from "../hooks/usePageMeta";
import { useI18n } from "../i18n/index.js";

function Hero() {
  const { lang, t, path } = useI18n();
  const { home } = t;

  return (
    <section aria-labelledby="hero-title" className="grid border-b border-ink lg:grid-cols-12">
      <div className="py-10 lg:col-span-8 lg:border-r lg:border-ink lg:py-16 lg:pr-12">
        <p className="label text-accent-ink">{home.eyebrow}</p>
        <h1
          id="hero-title"
          className="mt-6 text-[2.625rem] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[5.25rem] xl:text-[6.25rem]"
        >
          {home.heroBefore}
          <span className="whitespace-nowrap">{home.heroNowrap}</span>
          {home.heroAfter}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">{home.heroText}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Cta to={path.projects}>
            {home.viewProjects} <span aria-hidden="true">→</span>
          </Cta>
          <Cta href={profile.cv[lang]} variant="secondary" download>
            {home.downloadCv} <span className="text-ink-soft">(PDF)</span>
          </Cta>
        </div>
      </div>

      <aside aria-label={home.personalDetails} className="pb-10 lg:col-span-4 lg:py-16 lg:pl-8">
        <SpecList
          items={[
            [home.spec.name, profile.name],
            [home.spec.role, t.profile.role],
            [home.spec.location, profile.location],
            [home.spec.schedule, "Full time"],
            [home.spec.workMode, home.spec.workModeValue],
            [home.spec.education, "UTN · Digital House"],
            [
              home.spec.status,
              <span key="estado" className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 bg-accent" />
                {home.spec.statusValue}
              </span>,
            ],
          ]}
        />
      </aside>
    </section>
  );
}

// La franja de datos muestra las métricas destacadas del proyecto principal.
function Facts({ showcase }) {
  const { t, projectPath } = useI18n();
  const facts = showcase.metrics.filter((m) => m.highlight);

  return (
    <section aria-labelledby="datos" className="border-b border-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-3">
        <h2 id="datos" className="label text-ink-soft">
          {showcase.title} · {showcase.status}
        </h2>
        <Link
          to={projectPath(showcase.id)}
          className="label transition-colors duration-150 hover:text-accent-ink"
        >
          {t.home.seeCase}
        </Link>
      </div>
      <div className="grid sm:grid-cols-3">
        {facts.map(({ value, label }) => (
          <div
            key={label}
            className="border-b border-rule py-8 last:border-b-0 sm:border-r sm:border-b-0 sm:border-ink sm:px-6 sm:first:pl-0 sm:last:border-r-0"
          >
            {/* En 3 columnas el tamaño escala con el ancho de pantalla para no desbordar. */}
            <p className="text-[6rem] leading-[0.8] font-black tracking-[-0.02em] font-stretch-extra-condensed sm:text-[clamp(4rem,10vw,10rem)]">
              {value}
            </p>
            <p className="label mt-3">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Evolution() {
  const { t, projects, projectPath } = useI18n();

  return (
    <section aria-labelledby="evolucion" className="mt-24">
      <SectionHeader number="02" title={t.home.evolution} id="evolucion" />

      <ol className="mt-6 grid md:grid-cols-3">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className="relative border-b border-rule py-8 last:border-b-0 md:border-r md:border-b-0 md:border-ink md:px-6 md:first:pl-0 md:last:border-r-0"
          >
            <p className="label flex justify-between text-ink-soft">
              <span>{project.type}</span>
              <span>{project.year}</span>
            </p>
            <p
              aria-hidden="true"
              className="mt-4 text-7xl leading-none font-black font-stretch-extra-condensed"
            >
              v{i + 1}
            </p>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
              <Link
                to={projectPath(project.id)}
                className="transition-colors duration-200 hover:text-accent-ink"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{project.evolutionNote}</p>
            <p className="label mt-4">{project.status}</p>

            {/* Flecha entre pasos (solo desktop) */}
            {i < projects.length - 1 && (
              <span
                aria-hidden="true"
                className="label absolute top-9 -right-3 z-10 hidden bg-paper px-1 text-accent-ink md:block"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Closing() {
  const { lang, t, path } = useI18n();

  return (
    <section aria-labelledby="cierre" className="mt-24">
      <SectionHeader number="03" title={t.home.contact} id="cierre" />
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <p className="text-4xl leading-[0.95] font-extrabold tracking-[-0.035em] sm:text-5xl lg:col-span-8 lg:text-7xl">
          {t.home.closing}
        </p>
        <div className="flex flex-col justify-end gap-6 lg:col-span-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-lg font-bold break-all underline decoration-accent decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-accent-ink"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-3">
            <Cta to={path.contact}>{t.home.contact}</Cta>
            <Cta href={profile.cv[lang]} variant="secondary" download>
              CV (PDF)
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t, path, projects } = useI18n();
  usePageMeta(t.home.metaTitle, t.home.metaDescription);

  const featured = projects.filter((p) => p.featured);
  const showcase = projects.find((p) => p.id === "catalogo-avanzado");

  return (
    <>
      <Hero />
      <Facts showcase={showcase} />

      <section aria-labelledby="casos" className="mt-24">
        <SectionHeader number="01" title={t.home.caseStudies} id="casos">
          <Link
            to={path.projects}
            className="label transition-colors duration-150 hover:text-accent-ink"
          >
            {t.home.fullIndex}
          </Link>
        </SectionHeader>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <Evolution />
      <Closing />
    </>
  );
}

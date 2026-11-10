import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.js";
import Cta from "../components/Cta";
import PhoneFrame from "../components/PhoneFrame";
import Reveal from "../components/Reveal";
import Shot from "../components/Shot";
import SpecList from "../components/SpecList";
import usePageMeta from "../hooks/usePageMeta";
import { getProjectNumber, pad, projectLabel } from "../lib/projects.js";
import NotFound from "./NotFound";

// Bloque numerado del cuerpo: "01 / Problema" + contenido.
function CaseSection({ number, title, children }) {
  return (
    <Reveal as="section" className="grid gap-3 border-t border-ink pt-4 pb-12 sm:grid-cols-[9rem_1fr]">
      <h2 className="label">
        <span className="text-accent-ink">{number}</span> / {title}
      </h2>
      <div className="max-w-prose text-lg leading-relaxed">{children}</div>
    </Reveal>
  );
}

// Arma las secciones según los campos que tenga cada proyecto.
function getSections(project) {
  const { problem, solution, features, challenges, quality, impact, fullDescription } =
    project;

  return [
    ["Problema", <p key="p">{problem}</p>],
    [
      "Solución",
      <div key="s">
        <p>{solution}</p>
        {features && (
          <ul className="mt-6 border-t border-rule text-base">
            {features.map((item) => (
              <li key={item} className="border-b border-rule py-3">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>,
    ],
    challenges && [
      "Desafíos técnicos",
      <div key="c" className="grid gap-8">
        {challenges.map(({ title, text }) => (
          <div key={title}>
            <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
            <p className="mt-2 text-base">{text}</p>
          </div>
        ))}
      </div>,
    ],
    quality && ["Calidad", <p key="q">{quality}</p>],
    ["Impacto", <p key="i">{impact}</p>],
    // Si no hay desafíos cargados, se muestra la descripción completa.
    !challenges && ["Detalle técnico", <p key="d" className="text-ink-soft">{fullDescription}</p>],
  ].filter(Boolean);
}

function Gallery({ project }) {
  const { title, gallery, video } = project;
  const flat = gallery.filter((item) => !item.phone);
  const phone = gallery.filter((item) => item.phone);

  return (
    <div className="grid gap-12">
      {flat.map(({ file, alt }) => (
        <figure key={file}>
          <Shot file={file} alt={alt} className="aspect-[3/2] w-full border border-ink" />
          <figcaption className="mt-3 text-sm text-ink-soft">{alt}</figcaption>
        </figure>
      ))}

      {(phone.length > 0 || video) && (
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
          {phone.map(({ file, alt }) => (
            <figure key={file}>
              <PhoneFrame>
                <Shot file={file} alt={alt} className="h-full w-full" />
              </PhoneFrame>
              <figcaption className="mt-3 text-center text-sm text-ink-soft">{alt}</figcaption>
            </figure>
          ))}
          {video && (
            <figure>
              <PhoneFrame>
                <Shot video file={video} alt={`${title}: video de uso`} className="h-full w-full" />
              </PhoneFrame>
              <figcaption className="mt-3 text-center text-sm text-ink-soft">Video de uso</figcaption>
            </figure>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  // La ruta es /proyectos/:slug y el slug coincide con el id del proyecto.
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.id === slug);
  const project = projects[index];

  usePageMeta(
    project ? `${project.title} · Nicolás Romano` : "Proyecto no encontrado · Nicolás Romano",
    project?.shortDescription,
  );

  if (!project) return <NotFound />;

  const prev = projects[index - 1];
  const next = projects[index + 1];
  const sections = getSections(project);

  const links = (
    <div className="mt-6 flex flex-col items-start gap-3">
      {project.liveUrl && (
        <Cta href={project.liveUrl} target="_blank" rel="noreferrer">
          Ver online <span aria-hidden="true">↗</span>
        </Cta>
      )}
      {project.repoUrl && (
        <Cta href={project.repoUrl} variant="secondary" target="_blank" rel="noreferrer">
          Repositorio <span aria-hidden="true">↗</span>
        </Cta>
      )}
      {project.successor && (
        <Cta to={`/proyectos/${project.successor}`} variant="secondary">
          Ver la versión actual <span aria-hidden="true">→</span>
        </Cta>
      )}
      {project.private && (
        <p className="label border border-ink px-4 py-3">
          <span aria-hidden="true" className="mr-2 inline-block size-2 bg-accent" />
          Proyecto interno · no tiene demo pública
        </p>
      )}
    </div>
  );

  return (
    <article>
      <nav aria-label="Ruta" className="label flex justify-between border-b border-rule py-3">
        <Link to="/proyectos" className="transition-colors duration-150 hover:text-accent-ink">
          ← Proyectos
        </Link>
        <span className="text-ink-soft">
          {getProjectNumber(project)} / {pad(projects.length)}
        </span>
      </nav>

      <header className="border-b border-ink py-10 lg:py-14">
        <p className="label">{projectLabel(project)}</p>
        <h1 className="mt-4 text-5xl leading-[0.9] font-black tracking-[-0.045em] sm:text-7xl lg:text-[7.5rem]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft">
          {project.shortDescription}
        </p>
      </header>

      <div className="grid lg:grid-cols-12">
        <aside className="border-b border-ink py-8 lg:col-span-4 lg:border-r lg:border-b-0 lg:pr-8">
          <div className="lg:sticky lg:top-24">
            <h2 className="label mb-3 text-ink-soft">Ficha técnica</h2>
            <SpecList
              items={[
                ["Rol", project.role],
                ["Tipo", project.type],
                ["Año", project.year],
                ["Estado", project.status],
                [
                  "Stack",
                  <ul key="stack" className="font-mono text-[0.8125rem] leading-relaxed">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>,
                ],
              ]}
            />
            {links}
          </div>
        </aside>

        <div className="py-8 lg:col-span-8 lg:pl-10">
          <Reveal className="mb-12 grid gap-8 sm:grid-cols-2">
            {project.metrics.map(({ value, label }) => (
              <p key={label}>
                <span className="block text-[5rem] leading-[0.8] font-black tracking-[-0.02em] font-stretch-extra-condensed sm:text-[6.5rem] xl:text-[7.5rem]">
                  {value}
                </span>
                <span className="label mt-2 block">{label}</span>
              </p>
            ))}
          </Reveal>

          {sections.map(([title, content], i) => (
            <CaseSection key={title} number={pad(i + 1)} title={title}>
              {content}
            </CaseSection>
          ))}

          <section aria-labelledby="galeria" className="border-t border-ink pt-4">
            <h2 id="galeria" className="label mb-8">
              <span className="text-accent-ink">{pad(sections.length + 1)}</span> / Capturas
            </h2>
            <Gallery project={project} />
          </section>
        </div>
      </div>

      <nav aria-label="Otros proyectos" className="mt-16 grid border-t border-ink sm:grid-cols-2">
        {prev ? (
          <Link
            to={`/proyectos/${prev.id}`}
            className="group border-b border-rule py-6 sm:border-r sm:border-b-0 sm:border-ink sm:pr-6"
          >
            <span className="label text-ink-soft">← Anterior</span>
            <span className="mt-2 block text-2xl font-extrabold tracking-tight transition-colors duration-200 group-hover:text-accent-ink">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block sm:border-r sm:border-ink" />
        )}
        {next && (
          <Link to={`/proyectos/${next.id}`} className="group py-6 sm:pl-6 sm:text-right">
            <span className="label text-ink-soft">Siguiente →</span>
            <span className="mt-2 block text-2xl font-extrabold tracking-tight transition-colors duration-200 group-hover:text-accent-ink">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}

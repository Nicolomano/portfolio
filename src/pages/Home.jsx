import { Link } from "react-router-dom";
import projects from "../data/projects.js";
import profile from "../data/profile.js";
import Cta from "../components/Cta";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SpecList from "../components/SpecList";
import usePageMeta from "../hooks/usePageMeta";

const featured = projects.filter((p) => p.featured);

// La franja de datos muestra las métricas destacadas del proyecto principal.
const showcase = projects.find((p) => p.id === "catalogo-avanzado");
const facts = showcase.metrics.filter((m) => m.highlight);

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grid border-b border-ink lg:grid-cols-12">
      <div className="py-10 lg:col-span-8 lg:border-r lg:border-ink lg:py-16 lg:pr-12">
        <p className="label text-accent-ink">Desarrollador full-stack MERN</p>
        <h1
          id="hero-title"
          className="mt-6 text-[2.625rem] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[5.25rem] xl:text-[6.25rem]"
        >
          Hice el <span className="whitespace-nowrap">e-commerce</span> y la app de stock de la
          casa de repuestos donde trabajo.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          Trabajo desde 2021 en A&amp;P Refrigeración. Los técnicos buscan y piden repuestos
          en el e-commerce, y el equipo controla el stock desde el celular con la PWA. Las
          desarrollé de punta a punta y las dos están en uso.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Cta to="/proyectos">
            Ver proyectos <span aria-hidden="true">→</span>
          </Cta>
          <Cta href={profile.cv.es} variant="secondary" download>
            Descargar CV <span className="text-ink-soft">(PDF)</span>
          </Cta>
        </div>
      </div>

      <aside aria-label="Ficha personal" className="pb-10 lg:col-span-4 lg:py-16 lg:pl-8">
        <SpecList
          items={[
            ["Nombre", profile.name],
            ["Rol", profile.role],
            ["Ubicación", profile.location],
            ["Jornada", "Full time"],
            ["Modalidad", "Presencial · remoto · híbrido"],
            ["Formación", "UTN · Digital House"],
            [
              "Estado",
              <span key="estado" className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 bg-accent" />
                Buscando empleo
              </span>,
            ],
          ]}
        />
      </aside>
    </section>
  );
}

function Facts() {
  return (
    <section aria-labelledby="datos" className="border-b border-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-3">
        <h2 id="datos" className="label text-ink-soft">
          {showcase.title} · {showcase.status}
        </h2>
        <Link
          to={`/proyectos/${showcase.id}`}
          className="label transition-colors duration-150 hover:text-accent-ink"
        >
          Ver el caso →
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
  return (
    <section aria-labelledby="evolucion" className="mt-24">
      <SectionHeader number="02" title="Evolución" id="evolucion" />

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
                to={`/proyectos/${project.id}`}
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
  return (
    <section aria-labelledby="cierre" className="mt-24">
      <SectionHeader number="03" title="Contacto" id="cierre" />
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <p className="text-4xl leading-[0.95] font-extrabold tracking-[-0.035em] sm:text-5xl lg:col-span-8 lg:text-7xl">
          Busco un puesto como desarrollador en relación de dependencia.
        </p>
        <div className="flex flex-col justify-end gap-6 lg:col-span-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-lg font-bold break-all underline decoration-accent decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-accent-ink"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-3">
            <Cta to="/contacto">Contacto</Cta>
            <Cta href={profile.cv.es} variant="secondary" download>
              CV (PDF)
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    "Nicolás Romano · Desarrollador full-stack",
    "Desarrollador full-stack MERN en Buenos Aires. E-commerce de 3.900+ productos y PWA de stock en producción para A&P Refrigeración.",
  );

  return (
    <>
      <Hero />
      <Facts />

      <section aria-labelledby="casos" className="mt-24">
        <SectionHeader number="01" title="Casos de estudio" id="casos">
          <Link
            to="/proyectos"
            className="label transition-colors duration-150 hover:text-accent-ink"
          >
            Índice completo →
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

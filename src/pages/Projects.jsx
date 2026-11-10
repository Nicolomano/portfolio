import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.js";
import ProjectCover from "../components/ProjectCover";
import usePageMeta from "../hooks/usePageMeta";
import { getProjectNumber, pad } from "../lib/projects.js";

// Columnas del índice (las mismas para el encabezado y para cada fila).
const columns = "md:grid-cols-[3rem_minmax(0,1.3fr)_7rem_minmax(0,1fr)_3.5rem]";

export default function Projects() {
  usePageMeta(
    "Proyectos · Nicolás Romano",
    "Proyectos para A&P Refrigeración: catálogo web, e-commerce con 3.900+ productos y PWA de stock.",
  );

  // Proyecto cuya captura se muestra en el panel derecho (hover o foco).
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((p) => p.id === activeId);

  return (
    <>
      <header className="grid gap-6 border-b border-ink py-10 lg:grid-cols-12 lg:py-16">
        <p className="label text-ink-soft lg:col-span-12">{pad(projects.length)} proyectos</p>
        <h1 className="text-6xl leading-[0.9] font-black tracking-[-0.045em] sm:text-8xl lg:col-span-12 lg:text-[9rem]">
          Proyectos
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8">
          Todos hechos para A&amp;P Refrigeración, la casa de repuestos donde trabajo, en orden
          cronológico.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div
            aria-hidden="true"
            className={`label hidden gap-x-4 border-b border-ink py-3 text-ink-soft md:grid ${columns}`}
          >
            <span>N°</span>
            <span>Proyecto</span>
            <span>Tipo</span>
            <span>Stack</span>
            <span className="text-right">Año</span>
          </div>

          <ol>
            {projects.map((project) => (
              <li key={project.id} className="border-b border-ink">
                <Link
                  to={`/proyectos/${project.id}`}
                  onMouseEnter={() => setActiveId(project.id)}
                  onFocus={() => setActiveId(project.id)}
                  className={`group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-1.5 py-6 transition-colors duration-200 hover:bg-paper-dark md:-mx-3 md:px-3 ${columns}`}
                >
                  <span className="label text-ink-soft transition-colors duration-200 group-hover:text-accent-ink">
                    {getProjectNumber(project)}
                  </span>
                  <span className="text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl">
                    {project.title}
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block text-accent-ink opacity-0 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                      →
                    </span>
                  </span>
                  <span className="label col-start-2 md:col-start-auto">
                    {project.type}
                    {project.private && " · Privado"}
                  </span>
                  <span className="label col-start-2 leading-relaxed text-ink-soft md:col-start-auto">
                    {project.stack.join(" / ")}
                  </span>
                  <span className="label col-start-2 md:col-start-auto md:text-right">
                    {project.year}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* Vista previa: solo desktop. Es decorativa, el contenido está en las filas. */}
        <aside aria-hidden="true" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 mt-11">
            {active ? (
              <figure key={active.id} className="fade-in">
                <ProjectCover project={active} />
                <figcaption className="mt-3 text-sm text-ink-soft">
                  {active.shortDescription}
                </figcaption>
              </figure>
            ) : (
              <div className="stripes label flex aspect-[3/2] items-center justify-center border border-ink text-ink-soft">
                Pasá el cursor por un proyecto
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}

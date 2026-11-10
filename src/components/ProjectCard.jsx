import { Link } from "react-router-dom";
import ProjectCover from "./ProjectCover";
import Reveal from "./Reveal";
import { useI18n } from "../i18n/index.js";
import { pad, projectLabel } from "../lib/projects.js";

// Resumen de un proyecto como caso de estudio (Home):
// problema → solución → impacto, métrica principal en grande, stack y captura.
export default function ProjectCard({ project }) {
  const { t, projectPath } = useI18n();
  const { id, title, shortDescription, problem, solution, impact, stack, metrics } =
    project;
  const mainMetric = metrics[0];
  const url = projectPath(id);
  const { sections } = t.project;

  const steps = [
    [sections.problem, problem],
    [sections.solution, solution],
    [sections.impact, impact],
  ];

  return (
    <Reveal as="article" className="grid gap-10 border-t border-ink py-10 lg:grid-cols-12 lg:py-16">
      <div className="lg:col-span-5">
        <p className="label">{projectLabel(project, t.label)}</p>
        <h3 className="mt-4 text-4xl leading-[0.95] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          <Link to={url} className="transition-colors duration-200 hover:text-accent-ink">
            {title}
          </Link>
        </h3>
        <p className="mt-4 text-lg text-ink-soft">{shortDescription}</p>

        <ol className="mt-10">
          {steps.map(([name, text], i) => (
            <li key={name} className="grid grid-cols-[2.5rem_1fr] border-t border-rule py-4">
              <span className="label text-accent-ink">{pad(i + 1)}</span>
              <div>
                <h4 className="label">{name}</h4>
                <p className="mt-1.5 leading-relaxed">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="lg:col-span-7">
        <ProjectCover project={project} />

        <div className="mt-8 grid gap-6 border-t border-ink pt-4 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-10">
          <p>
            <span className="block text-[5.5rem] leading-[0.8] font-black tracking-[-0.02em] font-stretch-extra-condensed sm:text-[8rem]">
              {mainMetric.value}
            </span>
            <span className="label mt-2 block">{mainMetric.label}</span>
          </p>
          <div>
            <p className="label text-ink-soft">{t.project.spec.stack}</p>
            <p className="label mt-1.5 leading-relaxed">{stack.join(" / ")}</p>
          </div>
        </div>

        <Link
          to={url}
          className="label group mt-8 inline-flex items-center gap-3 border-b border-ink pb-1 transition-colors duration-200 hover:border-accent hover:text-accent-ink"
        >
          {t.project.readFullCase}
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </Reveal>
  );
}

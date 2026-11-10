import projects from "../data/projects.js";
import projectsEn from "../data/projects.en.js";

// 1 → "01"
export const pad = (n) => String(n).padStart(2, "0");

// Pisa los textos de un proyecto con su traducción. Imágenes, stack, años y
// links salen siempre de data/projects.js.
function localize(project, lang) {
  const translation = lang === "en" ? projectsEn[project.id] : null;
  if (!translation) return project;

  const { metrics, galleryAlts, ...texts } = translation;
  return {
    ...project,
    ...texts,
    metrics: project.metrics.map((metric, i) => ({ ...metric, ...metrics?.[i] })),
    gallery: project.gallery.map((item, i) => ({ ...item, alt: galleryAlts?.[i] ?? item.alt })),
  };
}

const byLang = {
  es: projects,
  en: projects.map((project) => localize(project, "en")),
};

export function getProjects(lang) {
  return byLang[lang] ?? projects;
}

// El número sale de la posición en el array (orden cronológico).
export function getProjectNumber(project) {
  return pad(projects.findIndex((p) => p.id === project.id) + 1);
}

// "Proyecto 03 / PWA / Privado" (el CSS .label lo pasa a mayúsculas).
// Público = tiene demo online; Archivado = ya no está online.
// `words` son los textos de ui.js → label.
export function projectLabel(project, words) {
  const visibility = project.private
    ? words.private
    : project.liveUrl
      ? words.public
      : words.archived;
  return `${words.project} ${getProjectNumber(project)} / ${project.type} / ${visibility}`;
}

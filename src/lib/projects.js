import projects from "../data/projects.js";

// 1 → "01"
export const pad = (n) => String(n).padStart(2, "0");

// El número sale de la posición en el array (orden cronológico).
export function getProjectNumber(project) {
  return pad(projects.indexOf(project) + 1);
}

// "Proyecto 03 / PWA / Privado" (el CSS .label lo pasa a mayúsculas)
export function projectLabel(project) {
  const visibility = project.private ? "Privado" : "Público";
  return `Proyecto ${getProjectNumber(project)} / ${project.type} / ${visibility}`;
}

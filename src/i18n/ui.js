// Textos de la interfaz en cada idioma. El contenido de los proyectos y de
// "Sobre mí" vive en src/data (projects.en.js, about.en.js).

const es = {
  langName: "Español",
  skipToContent: "Saltar al contenido",
  nav: { label: "Principal", projects: "Proyectos", about: "Sobre mí", contact: "Contacto" },
  switchLang: { text: "EN", label: "Read in English" },

  profile: {
    role: "Desarrollador full-stack MERN · Junior",
    availability: "Full time · presencial, remoto o híbrido",
  },

  label: { project: "Proyecto", private: "Privado", public: "Público", archived: "Archivado" },
  missingFile: "Falta el archivo",
  noFile: "sin archivo",
  mainScreenshot: (title) => `Captura principal de ${title}`,

  home: {
    metaTitle: "Nicolás Romano · Desarrollador full-stack",
    metaDescription:
      "Desarrollador full-stack MERN en Buenos Aires. E-commerce de 3.900+ productos y PWA de stock en producción para A&P Refrigeración.",
    eyebrow: "Desarrollador full-stack MERN",
    // El título se arma en tres partes para que "e-commerce" no se corte.
    heroBefore: "Hice el ",
    heroNowrap: "e-commerce",
    heroAfter: " y la app de stock de la casa de repuestos donde trabajo.",
    heroText:
      "Trabajo desde 2021 en A&P Refrigeración. Los técnicos buscan y piden repuestos en el e-commerce, y el equipo controla el stock desde el celular con la PWA. Las desarrollé de punta a punta y las dos están en uso.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    personalDetails: "Ficha personal",
    spec: {
      name: "Nombre",
      role: "Rol",
      location: "Ubicación",
      schedule: "Jornada",
      workMode: "Modalidad",
      workModeValue: "Presencial · remoto · híbrido",
      education: "Formación",
      status: "Estado",
      statusValue: "Buscando empleo",
    },
    seeCase: "Ver el caso →",
    caseStudies: "Casos de estudio",
    fullIndex: "Índice completo →",
    evolution: "Evolución",
    contact: "Contacto",
    closing: "Busco un puesto como desarrollador en relación de dependencia.",
  },

  projects: {
    metaTitle: "Proyectos · Nicolás Romano",
    metaDescription:
      "Proyectos para A&P Refrigeración: catálogo web, e-commerce con 3.900+ productos y PWA de stock.",
    count: (n) => `${n} proyectos`,
    title: "Proyectos",
    intro:
      "Todos hechos para A&P Refrigeración, la casa de repuestos donde trabajo, en orden cronológico.",
    columns: { number: "N°", project: "Proyecto", type: "Tipo", stack: "Stack", year: "Año" },
    hoverHint: "Pasá el cursor por un proyecto",
  },

  project: {
    notFound: "Proyecto no encontrado",
    breadcrumb: "Ruta",
    back: "← Proyectos",
    sections: {
      problem: "Problema",
      solution: "Solución",
      challenges: "Desafíos técnicos",
      quality: "Calidad",
      impact: "Impacto",
      details: "Detalle técnico",
      screenshots: "Capturas",
    },
    specSheet: "Ficha técnica",
    spec: { role: "Rol", type: "Tipo", year: "Año", status: "Estado", stack: "Stack" },
    live: "Ver online",
    repo: "Repositorio",
    successor: "Ver la versión actual",
    internal: "Proyecto interno · no tiene demo pública",
    usageVideo: "Video de uso",
    otherProjects: "Otros proyectos",
    previous: "← Anterior",
    next: "Siguiente →",
    readFullCase: "Leer el caso completo",
  },

  about: {
    metaTitle: "Sobre mí · Nicolás Romano",
    metaDescription:
      "De operario CNC a desarrollador full-stack: recorrido, formación (UTN, Digital House, Coderhouse) y disponibilidad.",
    eyebrow: "Sobre mí / Perfil",
    title: "Sobre mí",
    intro:
      "Aprendí a programar resolviendo problemas del negocio donde trabajo. Desde 2021 estoy en atención al cliente en A&P Refrigeración, y ahí vi los problemas de cerca: consultas repetidas por WhatsApp, técnicos que no encontraban un repuesto porque el sistema lo tenía abreviado, stock que solo se podía revisar desde una computadora. Antes fui operario CNC.",
    path: "Recorrido",
    education: "Formación",
    table: { school: "Institución", program: "Programa", year: "Año" },
    languages: "Idiomas",
    availability: "Disponibilidad",
    contactMe: "Contactarme",
  },

  contact: {
    metaTitle: "Contacto · Nicolás Romano",
    metaDescription:
      "Email, LinkedIn y CV de Nicolás Romano, desarrollador full-stack MERN en Buenos Aires.",
    title: "Contacto",
    intro:
      "Busco empleo en relación de dependencia como desarrollador, full time, presencial, remoto o híbrido. La forma más rápida de contactarme es por email.",
    copy: "Copiar",
    copied: "Copiado ✓",
    copiedAnnouncement: "Email copiado al portapapeles",
    channels: "Canales",
    location: "Ubicación",
    workMode: "Modalidad",
    resume: "Currículum",
    cvEs: "CV en español",
    cvEn: "CV in English",
  },

  notFound: {
    metaTitle: "Página no encontrada · Nicolás Romano",
    title: "Código de repuesto no encontrado.",
    nothingAt: "No hay nada en",
    tryLinks: "Puede que el link esté mal escrito. Probá con",
    or: "o",
    projects: "proyectos",
    about: "sobre mí",
    contact: "contacto",
    backHome: "Volver al inicio",
  },
};

const en = {
  langName: "English",
  skipToContent: "Skip to content",
  nav: { label: "Main", projects: "Projects", about: "About", contact: "Contact" },
  switchLang: { text: "ES", label: "Ver en español" },

  profile: {
    role: "Full-stack MERN developer · Junior",
    availability: "Full time · on-site, remote or hybrid",
  },

  label: { project: "Project", private: "Private", public: "Public", archived: "Archived" },
  missingFile: "Missing file",
  noFile: "no file",
  mainScreenshot: (title) => `Main screenshot of ${title}`,

  home: {
    metaTitle: "Nicolás Romano · Full-stack developer",
    metaDescription:
      "Full-stack MERN developer in Buenos Aires. A 3,900+ product e-commerce site and a stock-control PWA in production for A&P Refrigeración.",
    eyebrow: "Full-stack MERN developer",
    heroBefore: "I built the ",
    heroNowrap: "e-commerce site",
    heroAfter: " and the stock app for the parts store where I work.",
    heroText:
      "I've worked at A&P Refrigeración, a refrigeration parts store, since 2021. Technicians search for and order parts on the e-commerce site, and the team manages stock from their phones with the PWA. I built both end to end, and both are in use.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    personalDetails: "Personal details",
    spec: {
      name: "Name",
      role: "Role",
      location: "Location",
      schedule: "Schedule",
      workMode: "Work mode",
      workModeValue: "On-site · remote · hybrid",
      education: "Education",
      status: "Status",
      statusValue: "Open to work",
    },
    seeCase: "Read the case →",
    caseStudies: "Case studies",
    fullIndex: "Full index →",
    evolution: "Evolution",
    contact: "Contact",
    closing: "I'm looking to join a development team as a full-time employee.",
  },

  projects: {
    metaTitle: "Projects · Nicolás Romano",
    metaDescription:
      "Projects for A&P Refrigeración: web catalog, e-commerce site with 3,900+ products and a stock-control PWA.",
    count: (n) => `${n} projects`,
    title: "Projects",
    intro:
      "All built for A&P Refrigeración, the refrigeration parts store where I work, in chronological order.",
    columns: { number: "No.", project: "Project", type: "Type", stack: "Stack", year: "Year" },
    hoverHint: "Hover over a project",
  },

  project: {
    notFound: "Project not found",
    breadcrumb: "Breadcrumb",
    back: "← Projects",
    sections: {
      problem: "Problem",
      solution: "Solution",
      challenges: "Technical challenges",
      quality: "Quality",
      impact: "Impact",
      details: "Technical details",
      screenshots: "Screenshots",
    },
    specSheet: "Project details",
    spec: { role: "Role", type: "Type", year: "Year", status: "Status", stack: "Stack" },
    live: "View live",
    repo: "Repository",
    successor: "See the current version",
    internal: "Internal project · no public demo",
    usageVideo: "Usage video",
    otherProjects: "Other projects",
    previous: "← Previous",
    next: "Next →",
    readFullCase: "Read the full case study",
  },

  about: {
    metaTitle: "About · Nicolás Romano",
    metaDescription:
      "From CNC operator to full-stack developer: experience, education (UTN, Digital House, Coderhouse) and availability.",
    eyebrow: "About / Profile",
    title: "About me",
    intro:
      "I learned to code by solving problems at the business where I work. I've been in customer service at A&P Refrigeración since 2021, and that's where I saw the problems up close: the same questions over and over on WhatsApp, technicians who couldn't find a part because the system listed it under an abbreviation, stock that could only be checked from a computer. Before that, I was a CNC operator.",
    path: "Experience",
    education: "Education",
    table: { school: "Institution", program: "Program", year: "Year" },
    languages: "Languages",
    availability: "Availability",
    contactMe: "Get in touch",
  },

  contact: {
    metaTitle: "Contact · Nicolás Romano",
    metaDescription:
      "Email, LinkedIn and CV of Nicolás Romano, full-stack MERN developer in Buenos Aires.",
    title: "Contact",
    intro:
      "I'm looking for a full-time developer job as an employee: on-site, remote or hybrid. The fastest way to reach me is by email.",
    copy: "Copy",
    copied: "Copied ✓",
    copiedAnnouncement: "Email copied to clipboard",
    channels: "Channels",
    location: "Location",
    workMode: "Work mode",
    resume: "Résumé",
    cvEs: "CV en español",
    cvEn: "CV in English",
  },

  notFound: {
    metaTitle: "Page not found · Nicolás Romano",
    title: "Part number not found.",
    nothingAt: "There's nothing at",
    tryLinks: "The link may be mistyped. Try",
    or: "or",
    projects: "projects",
    about: "about",
    contact: "contact",
    backHome: "Back to home",
  },
};

const ui = { es, en };

export default ui;

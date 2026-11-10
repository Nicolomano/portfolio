# Portfolio · Nicolás Romano

Portfolio personal de Nicolás Romano, desarrollador full-stack MERN en Buenos Aires.
Muestra los proyectos que hice para A&P Refrigeración, la casa de repuestos donde trabajo,
presentados como casos de estudio: problema, solución, desafíos técnicos e impacto.

## Stack

React 19 · Vite · React Router · Tailwind CSS 4 · Archivo y JetBrains Mono autoalojadas con Fontsource

## Estructura

```
src/
├── data/          contenido del sitio (proyectos, perfil, sobre mí), separado de la UI
├── components/    piezas chicas: Shot, PhoneFrame, SpecList, Reveal, Cta…
├── pages/         Home, Projects, ProjectDetail, About, Contact, NotFound
├── hooks/         usePageMeta: title y meta description por página
├── lib/           helpers de proyectos (numeración, etiqueta, textos por idioma)
└── i18n/          rutas por idioma, hook useI18n y textos de la interfaz (es/en)
public/
└── img/           capturas de los proyectos
```

Para agregar o editar un proyecto alcanza con modificar `src/data/projects.js`
y su traducción en `src/data/projects.en.js`. El sitio está en español (`/`) e inglés (`/en`).
Si falta una imagen, el sitio muestra un placeholder con el nombre del archivo esperado.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint     # ESLint
npm run build    # build de producción en dist/
```

## Deploy

Publicado en Vercel. `vercel.json` redirige todas las rutas a `index.html`
para que las URLs del router (por ejemplo `/proyectos/pwa-stock`) funcionen al recargar.

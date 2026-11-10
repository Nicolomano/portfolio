# Contexto del proyecto

Portfolio de **Nicolás Romano**, desarrollador full-stack MERN junior en Buenos Aires.
Repo: https://github.com/Nicolomano/portfolio · Deploy previsto en Vercel (`vercel.json` ya tiene el rewrite SPA).

Este archivo existe para retomar el trabajo desde otra PC o en otra sesión. Leelo entero antes de tocar algo.

## Quién es y qué tiene que contar el sitio

- Trabaja desde 2021 en atención al cliente en **A&P Refrigeración**, una **casa de repuestos de refrigeración** (NO es mayorista: no usar esa palabra). Antes fue operario CNC.
- Estudia la Tecnicatura en Programación (UTN) y la certificación Back-End (Digital House). Coderhouse: JavaScript 2023, React 2023, Back-End 2024. Inglés B1.
- Busca empleo en relación de dependencia: full time, presencial/remoto/híbrido, movilidad propia.
- Mensaje central: **tiene software en producción en un negocio real**. El hero dice "Hice el e-commerce y la app de stock de la casa de repuestos donde trabajo." La historia de "aprendí a programar resolviendo problemas del negocio" va en Sobre mí, no en el hero (decisión tomada: no volver a ponerla en grande).

## Proyectos (src/data/projects.js, orden cronológico = numeración)

1. **Catálogo A&P** (`catalogo-basico`): primer catálogo web. Reemplazado por la v2. Sin capturas todavía.
2. **Catálogo A&P v2** (`catalogo-avanzado`): e-commerce en producción en refrigeracionayp.com. Es el proyecto estrella: buscador tolerante a errores (Damerau-Levenshtein), registro de técnicos con matrícula y 10% de descuento, pedidos por WhatsApp con precio recalculado en servidor, combos, importación desde Excel, panel admin, SEO con páginas renderizadas en Vercel Functions, 180+ tests. Tiene capturas reales.
3. **PWA Stock** (`pwa-stock`): app interna para consultar y corregir stock desde el celular contra SQL Server. Privada, sin demo pública. Sin capturas todavía.

## Reglas de contenido

- **No inventar métricas, fechas ni logros.** Lo que no se sepa va con `[TODO: …]` visible y un comentario `// TODO`.
- No mostrar en capturas datos de técnicos (nombres, DNI, matrículas, teléfonos) ni pedidos con clientes.
- Escribir en español rioplatense, plano y específico. Nada de eslóganes ("del mostrador al código", "Hablemos.", "Cada versión arranca de…"): se sacaron porque hacían que el sitio pareciera hecho con IA.

## Dirección visual: "ficha técnica industrial"

- Fondo papel `#F4F2EE`, tinta `#141414`, líneas de 1px. Tokens en `src/index.css` (`@theme`).
- Un solo acento: naranja `#FF4F00` (`accent`) solo en superficies chicas (CTA en hover, punto de estado, subrayados). Para **texto** usar `accent-ink` `#B83800` (el naranja puro no pasa AA sobre papel).
- Tipografía: Archivo variable (títulos 800/900, tracking negativo; números grandes con `font-stretch-extra-condensed`) + JetBrains Mono en mayúsculas para etiquetas (clase `.label`).
- Layout asimétrico alineado a la izquierda, secciones numeradas (01, 02…), fichas clave:valor (`SpecList`).
- **Prohibido:** gradientes, glassmorphism/backdrop-blur, glow, sombras difusas, cards `rounded-2xl` iguales, emojis, íconos genéricos, pastillas de colores por tecnología, paleta slate/violeta/índigo, barras de skills, typewriter, partículas, animaciones en todo.
- **También se sacó (no volver a agregar):** códigos falsos tipo "Rev. 2026", "Ficha / NR-001", "Paso 01", "Fig. 01", numeración en la navbar, la tabla "consulta de stock" en la 404.
- Movimiento mínimo: `Reveal` (fade al scroll), hovers de 150–250 ms, todo respeta `prefers-reduced-motion`.

## Arquitectura

```
src/data/       projects.js, profile.js (email, LinkedIn, GitHub, CV), about.js
src/components/ Shot (imagen/video con placeholder rayado si falta), PhoneFrame (celular en CSS),
                ProjectCover, ProjectCard (resumen de caso en Home), Reveal, SpecList,
                SectionHeader, Cta, Layout, Navbar, Footer
src/pages/      Home, Projects (índice con preview en hover), ProjectDetail, About, Contact, NotFound
src/hooks/      usePageMeta (title + meta description por página)
src/lib/        projects.js (pad, número y etiqueta "Proyecto 02 / E-commerce / Público")
```

- Rutas: `/`, `/proyectos`, `/proyectos/:slug` (slug = `id` del proyecto), `/sobre-mi`, `/contacto`, `*`.
- `ProjectDetail` arma las secciones según los campos que existan (`features`, `challenges`, `quality` son opcionales) y las numera solo.
- Campos de proyecto: no renombrar los existentes (`id, title, shortDescription, fullDescription, problem, stack, image, liveUrl, gallery`). `gallery` es `[{ file, alt, phone? }]`.
- Open Graph estático en `index.html` (los scrapers no ejecutan JS).

## Imágenes

- Van en `public/img/`. Si un archivo no existe, el sitio muestra un placeholder con la ruta esperada.
- Capturas de escritorio en **3:2** (ej. ventana 1200×800 con DPR 2). Celular en **9:19,5** (iPhone 12 Pro, 1170×2532).
- Antes de commitear, pasarlas a JPG calidad ~85 y achicarlas: 1800 px de ancho las de escritorio, 720 px las de celular. Si cambia la extensión, actualizar el nombre en `projects.js`.

## Pendientes

- [ ] Deploy en Vercel; después cambiar `og:url` y `og:image` (URL absoluta) en `index.html`.
- [ ] `public/og.png` está vacío (0 bytes): reemplazar por imagen real 1200×630 (se puede capturar el hero a ese tamaño).
- [ ] CVs: `public/cv/cv-nicolas-romano-es.pdf` y `public/cv/cv-nicolas-romano-en.pdf` (la carpeta está vacía).
- [ ] Capturas del catálogo v1: `catalogo-basico.png`, `-1.png`, `-2.png`.
- [ ] Capturas de la PWA: `pwa-stock.png`, `-1.png`, `-2.png`, `-3.png` (celular). Video opcional `public/video/pwa-stock-demo.mp4` (<5 MB); si no se hace, poner `video: null`.
- [ ] Años reales de los tres proyectos (`year: "20XX"`).
- [ ] Impacto medible del catálogo v1 y de la PWA; métrica principal del v1 (o `metrics: []`).
- [ ] Confirmar las métricas de la PWA: "2 depósitos" y "500 por lote" (no se sabe el contexto del 500).
- [ ] `src/data/about.js`: años y empresa/rubro como operario CNC, y año en que empezó a programar para A&P.
- [ ] Decidir si "3.600+ productos" pasa a "3.900+": el panel admin muestra 4.159 en total y 3.920 activos.
- [ ] `repoUrl` de los proyectos si los repos son públicos.

## Comandos

```bash
npm install
npm run dev     # http://localhost:5173
npm run lint    # tiene que quedar sin errores ni warnings
npm run build
```

Antes de cada commit correr `npm run lint` y `npm run build`.

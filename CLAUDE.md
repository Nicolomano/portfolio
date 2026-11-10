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

1. **Catálogo A&P** (`catalogo-basico`, 2024): primer catálogo web con backend propio, carrito, precios USD→ARS y panel admin. Reemplazado por la v2. Tiene capturas reales.
2. **Catálogo A&P v2** (`catalogo-avanzado`): e-commerce en producción en refrigeracionayp.com. Es el proyecto estrella: buscador tolerante a errores (Damerau-Levenshtein), registro de técnicos con matrícula y 10% de descuento, pedidos por WhatsApp con precio recalculado en servidor, combos, importación desde Excel, panel admin, SEO con páginas renderizadas en Vercel Functions, 180+ tests. Tiene capturas reales.
3. **PWA Stock** (`pwa-stock`): app interna contra el SQL Server del sistema de gestión: búsqueda, ajustes, cargas de mercadería, movimientos entre depósitos (CENTRAL = el local, DEPOSITO), faltantes para compras y para traer del depósito, stock mínimo, etiquetas. Privada, sin demo pública. Tiene capturas reales.

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
- `successor` (opcional): id del proyecto que lo reemplazó; el detalle muestra "Ver la versión actual". Sin `liveUrl` ni `private`, la etiqueta dice "Archivado".
- Campos de proyecto: no renombrar los existentes (`id, title, shortDescription, fullDescription, problem, stack, image, liveUrl, gallery`). `gallery` es `[{ file, alt, phone? }]`.
- Open Graph estático en `index.html` (los scrapers no ejecutan JS).

## Imágenes

- Van en `public/img/`. Si un archivo no existe, el sitio muestra un placeholder con la ruta esperada.
- Capturas de escritorio en **3:2** (ej. ventana 1200×800 con DPR 2). Celular en **9:19,5** (iPhone 12 Pro, 1170×2532).
- Antes de commitear, pasarlas a JPG calidad ~85 y achicarlas: 1800 px de ancho las de escritorio, 720 px las de celular. Si cambia la extensión, actualizar el nombre en `projects.js`.

## Pendientes

- [ ] Deploy en Vercel; después cambiar `og:url` y `og:image` (URL absoluta) en `index.html`.
- [x] `public/og.png`: captura del hero en 1200×630 (viewport 1270 px reescalado, sin el párrafo, los botones ni la franja de datos). Si cambia el hero, regenerarlo.
- [x] CVs en `public/cv/`.
- [x] Capturas del catálogo v1 (`catalogo-basico-{listado,detalle,kit}.jpg`), sacadas con puppeteer de catalogoayp.vercel.app con scroll para no mostrar el banner de "fuera de servicio".
- [x] catalogoayp.vercel.app se va a dar de baja (ya muestra un banner de "fuera de servicio"): el v1 quedó con `liveUrl: null`, etiqueta "Archivado" y botón a la v2 (campo `successor`).
- [x] Capturas de la PWA: 6 JPG de celular en `public/img/pwa-stock-*.jpg` (buscar, ajuste, carga, movimiento, faltantes, traer). `video: null`. Muestran nombres de usuario de empleados (no de clientes).
- [x] Años (confirmados por Nicolás): v1 2024, v2 2026, PWA 2026.
- [x] Caso de la PWA reescrito y verificado contra su repo (`Nicolomano/stock-api`, **privado**: no linkearlo). Impacto cualitativo; si aparece un dato medible (ej. cantidad de cargas), sumarlo.
- [x] PWA: antes había 4 computadoras para todo el equipo (muchas más personas) y una computadora no deja moverse por el depósito. El nombre queda "PWA Stock".
- [x] Métricas de la PWA: el "500 por lote" era del catálogo v2 (bulkWrite en lotes de 500), se movió ahí como desafío. La PWA quedó con "2 depósitos separados" y "3–4 computadoras compartidas antes de la app" (datos del CV).
- [x] `src/data/about.js`: CNC en Pack Tango 2018–2019; desarrollo para A&P desde 2024 (datos del CV).
- [x] "3.900+ productos" en el sitio y en los CVs (3.920 activos en el panel).
- [x] Catálogo v1 reescrito y verificado contra su repo (`Nicolomano/catalogoAyp`): tiene backend Express 5 + MongoDB, precios USD→ARS por cotización, kits, técnicos, Excel, migración de imágenes Cloudinary→R2 con Sharp, 17 PRs mergeados. **El CV lo describe mal ("React + Vite, sin backend"): corregirlo.** No usar "freelance" ni "distribuidora": trabaja ahí en relación de dependencia.
- [x] CVs actualizados (ES y EN): 3.900+, buscador, SEO y 180+ tests del v2; PWA con funciones y "4 computadoras"; v1 con backend y sin el link a catalogoayp.vercel.app. Se generaron con el conversor de ONLYOFFICE (`x2t`), que da el mismo resultado que el PDF original.
- [x] Proyectos personales del CV (directorio comunitario, screener de CEDEARs): decidido no sumarlos por ahora.

## Fuentes de datos

- Los CVs de `public/cv/` son fuente válida de fechas y datos para el sitio (los `.docx` editables no están en el repo).
- [ ] `repoUrl`: `Nicolomano/catalogoAyp` y `Nicolomano/catalogo-ayp-v2` son públicos, pero su historial tiene archivos `.env` commiteados (v1: `Backend/src/config/.env.development`, `frontend/.env`; v2: `frontend/.env`, `frontend/.env.production`). Revisarlos y rotar credenciales si hace falta antes de linkearlos.

## Comandos

```bash
npm install
npm run dev     # http://localhost:5173
npm run lint    # tiene que quedar sin errores ni warnings
npm run build
```

Antes de cada commit correr `npm run lint` y `npm run build`.

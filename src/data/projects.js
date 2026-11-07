// Datos de los proyectos. La UI solo lee de acá.
// El orden del array es el orden cronológico: define la numeración (01, 02, 03)
// y la línea de evolución del Home.
//
// Campos:
//   id, title, shortDescription, fullDescription, problem, stack, image, liveUrl, gallery
//   solution              → resumen de la solución (un párrafo)
//   features              → qué hace, en puntos (opcional)
//   challenges            → [{ title, text }] desafíos técnicos (opcional)
//   quality               → testing / verificación (opcional)
//   impact                → resultado
//   metrics               → [{ value, label, highlight? }]; la primera es la principal.
//                           highlight: true la muestra en la franja de datos del Home.
//   gallery               → [{ file, alt, phone? }]; phone: true la muestra en un marco de celular
//   type                  → "Web" | "E-commerce" | "PWA"
//   private               → true si no tiene demo pública
//   featured              → aparece en el Home
//   year, role, status    → ficha lateral del detalle
//   evolutionNote         → qué cambió respecto de la versión anterior
//   video                 → archivo en public/video/ (opcional)
//   repoUrl               → link al repositorio (opcional)
//
// Las imágenes se buscan en public/img/<file>.

const projects = [
  {
    id: "catalogo-basico",
    title: "Catálogo A&P",
    shortDescription:
      "Primera versión de un catálogo web para que los clientes vean productos y precios sin tener que preguntar todo por WhatsApp.",
    fullDescription:
      "Antes de esto, en la empresa recibíamos todo el día consultas de precio y stock por WhatsApp, y responder una por una llevaba mucho tiempo. Esta fue mi primera solución: un catálogo web con backend propio donde el cliente podía ver los productos disponibles. Fue mi punto de partida para empezar a resolver este problema con código, y sentó las bases de lo que después se convirtió en una versión mucho más completa.",
    problem:
      "Los clientes preguntaban precios y disponibilidad de productos por WhatsApp constantemente, y armar cada respuesta a mano consumía mucho tiempo del equipo de atención.",
    solution:
      "Un catálogo web con backend propio en Node.js, Express y MongoDB, donde el cliente ve los productos disponibles y sus precios. Las imágenes se alojan en Cloudinary.",
    // TODO: completar con un dato real (ej. cuántas consultas dejaron de llegar, cuántos productos cargados).
    impact:
      "[TODO: impacto medible del catálogo básico]. Sentó las bases técnicas de la v2.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    // TODO: reemplazar por la métrica real de esta versión.
    metrics: [{ value: "[TODO]", label: "métrica principal de la v1" }],
    image: "catalogo-basico.png",
    liveUrl: "https://catalogoayp.vercel.app",
    repoUrl: null, // TODO: URL del repo si es público
    gallery: [
      { file: "catalogo-basico-1.png", alt: "Listado de productos con precios" },
      { file: "catalogo-basico-2.png", alt: "Detalle de un producto" },
    ],
    video: null,
    type: "Web",
    private: false,
    featured: false,
    year: "20XX", // TODO: año real
    role: "Diseño y desarrollo full-stack",
    status: "Reemplazado por la v2",
    evolutionNote: "Los clientes ven productos y precios sin preguntar por WhatsApp.",
  },
  {
    id: "catalogo-avanzado",
    title: "Catálogo A&P v2",
    shortDescription:
      "Catálogo online y sistema de pedidos de A&P Refrigeración: 3.600+ productos, registro de técnicos y pedidos por WhatsApp.",
    fullDescription:
      "Catálogo online y sistema de pedidos para A&P Refrigeración, una casa de repuestos de refrigeración. Reemplazó al catálogo básico: además de mostrar productos, busca con tolerancia a errores, valida técnicos matriculados y arma el pedido con el precio calculado en el servidor.",
    problem:
      "Una casa de repuestos con más de 3.600 productos cargados en un sistema contable con nombres abreviados (“MOTOC.”, “FILCAP”, “TUBO DE NITRO”). Los clientes, técnicos de refrigeración, buscan con nombres coloquiales y errores de tipeo, y piden por WhatsApp. Además, el negocio tiene un precio diferenciado para técnicos matriculados, que hay que validar antes de otorgarlo.",
    solution:
      "Un catálogo con buscador tolerante a errores que entiende las abreviaturas del sistema contable, registro de técnicos con validación de matrícula y pedidos por WhatsApp con el precio recalculado en el servidor.",
    features: [
      "Buscador que corrige hacia palabras que existen en el catálogo (“lokring” → lockring, “tecunse” → tecumseh) y entiende las abreviaturas del sistema contable.",
      "Registro de técnicos con validación de matrícula (foto o PDF), flujo de aprobación y descuento del 10% calculado del lado del servidor.",
      "Pedidos por WhatsApp con el precio recalculado en el servidor, sin confiar en lo que manda el navegador.",
      "Combos de productos con precio en tiempo real. El sistema contable no maneja combos, así que el pedido llega con el desglose de códigos para facturar.",
      "Importación masiva desde el Excel del sistema contable, con vista previa y protección contra borrados accidentales.",
      "Panel de administración con dos niveles de acceso, métricas de visitas y búsquedas, y gestión de banners, destacados y categorías.",
    ],
    challenges: [
      {
        title: "SEO en una SPA",
        text: "Google no scrollea, así que solo veía 24 productos por categoría. Armé páginas renderizadas en el servidor para los buscadores (Vercel Functions), con el mismo contenido que ve el usuario, datos estructurados (Product, BreadcrumbList, Store) y URLs por categoría. Search Console descubrió las 3.889 páginas del sitemap.",
      },
      {
        title: "Corrector de búsqueda",
        text: "El primero generaba variantes con un error de tipeo y traía resultados absurdos (“jabon” → “labon” → “ESLABON”). Lo reemplacé por distancia de Damerau-Levenshtein contra un vocabulario construido desde el propio catálogo, cacheado en memoria.",
      },
      {
        title: "Un bug silencioso de datos",
        text: "Encadenar dos .select() en Mongoose no los combina. El panel mostraba que casi ningún técnico había subido la matrícula, cuando sí la habían subido.",
      },
      {
        title: "Auditoría de seguridad",
        text: "Un parámetro sin validar permitía descargar el catálogo entero en un solo pedido (842 KB), y la paginación inválida devolvía errores 500. Sumé autenticación JWT con revocación de sesiones y protección contra inyección NoSQL en el cuerpo de las peticiones.",
      },
    ],
    quality:
      "Más de 180 pruebas automatizadas sobre una base de datos en memoria descartable, sembrada con datos reales del catálogo. Cada corrección se verificó contra producción antes y después.",
    impact:
      "En producción en refrigeracionayp.com. Búsquedas que antes no devolvían nada ahora encuentran el producto: “rulemanes” pasó de 0 a 60 resultados.",
    stack: [
      "React 19",
      "Vite",
      "Tailwind 4",
      "Node.js",
      "Express 5",
      "MongoDB / Mongoose",
      "Vercel Functions",
      "Railway",
      "Cloudflare R2",
      "Resend",
    ],
    metrics: [
      { value: "3.600+", label: "productos en catálogo", highlight: true },
      { value: "3.889", label: "páginas descubiertas por Google", highlight: true },
      { value: "180+", label: "pruebas automatizadas", highlight: true },
      { value: "0 → 60", label: "resultados para “rulemanes”" },
    ],
    image: "catalogo-avanzado.jpg",
    liveUrl: "https://refrigeracionayp.com",
    repoUrl: null, // TODO: URL del repo si es público
    // Ojo: no mostrar datos de técnicos (nombres, DNI, matrículas, teléfonos) ni pedidos con clientes.
    gallery: [
      {
        file: "catalogo-avanzado-buscador.jpg",
        alt: "Búsqueda con error de tipeo: “lokrin” devuelve resultados para lockring",
      },
      {
        file: "catalogo-avanzado-descuento.jpg",
        alt: "Catálogo con el 10% de descuento para técnicos aprobados",
      },
      {
        file: "catalogo-avanzado-combo.jpg",
        alt: "Ficha de un combo: qué incluye, con el código de cada producto para facturar",
      },
      {
        file: "catalogo-avanzado-mobile.jpg",
        alt: "Catálogo en el celular",
        phone: true,
      },
      {
        file: "catalogo-avanzado-admin.jpg",
        alt: "Panel de administración: gestión de productos e importación desde Excel",
      },
      {
        file: "catalogo-avanzado-admin-combos.jpg",
        alt: "Panel de combos con el precio calculado a partir de sus productos",
      },
    ],
    video: null,
    type: "E-commerce",
    private: false,
    featured: true,
    year: "20XX", // TODO: año real
    role: "Diseño y desarrollo full-stack",
    status: "En producción",
    evolutionNote:
      "Búsqueda tolerante a errores, precio para técnicos y pedidos por WhatsApp.",
  },
  {
    id: "pwa-stock",
    title: "PWA Stock",
    shortDescription:
      "Una progressive web app para consultar el stock de productos y modificarlo en tiempo real desde el celular.",
    fullDescription:
      "PWA Stock es una aplicación web progresiva que permite consultar el stock de productos y modificarlo en tiempo real. La aplicación está diseñada en conexión con el sistema que usa la empresa desde las computadoras de atención al cliente, permitiendo acceder a la base SQL desde el celular para que los empleados puedan ver, comprobar y modificar el stock de los productos estén donde estén. Está desarrollada con JavaScript, Node.js, Express y SQL Server.",
    problem:
      "El problema que resolvió esta aplicación fue la necesidad de consultar y modificar el stock de productos desde cualquier lugar, sin estar en la oficina ni tener acceso a una computadora. Esto permitió a los empleados de la empresa ser más eficientes, ya que podían acceder a la información del stock en tiempo real desde sus dispositivos móviles.",
    solution:
      "Una PWA conectada a la misma base SQL Server que usa el sistema de las computadoras de atención al cliente. Desde el celular, el empleado busca un producto, comprueba el stock y lo corrige en el momento.",
    impact:
      "Los empleados consultan y corrigen el stock desde el celular, estén donde estén, sin volver a una computadora. [TODO: dato medible, ej. tiempo ahorrado por control de stock].",
    stack: ["JavaScript", "Node.js", "Express", "SQL Server"],
    // TODO: confirmar el contexto de estas métricas (qué depósitos, qué se procesa en lotes de 500).
    metrics: [
      { value: "2", label: "depósitos" },
      { value: "500", label: "por lote" },
    ],
    image: "pwa-stock.png",
    liveUrl: null,
    repoUrl: null,
    gallery: [
      { file: "pwa-stock-1.png", alt: "Búsqueda de un producto", phone: true },
      { file: "pwa-stock-2.png", alt: "Stock de un producto por depósito", phone: true },
      { file: "pwa-stock-3.png", alt: "Corrección del stock", phone: true },
    ],
    video: "pwa-stock-demo.mp4",
    type: "PWA",
    private: true,
    featured: true,
    year: "20XX", // TODO: año real
    role: "Diseño y desarrollo full-stack",
    status: "En uso interno",
    evolutionNote: "El stock se consulta y se corrige desde el celular.",
  },
];

export default projects;

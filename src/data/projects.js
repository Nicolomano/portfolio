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
      "Primer catálogo web de A&P Refrigeración: carrito con pedido por WhatsApp, precios en dólares convertidos a pesos según la cotización y panel de administración.",
    fullDescription:
      "Primer catálogo online del negocio, con backend propio. Los clientes buscan productos, arman el carrito y mandan el pedido por WhatsApp; desde el panel se administran productos, precios, kits, banners y técnicos.",
    problem:
      "El catálogo tiene muchos productos con precio en dólares, que cambia con la cotización. El stock se llevaba en planillas de Excel y los pedidos llegaban por WhatsApp sin ningún formato, así que cada consulta de precio y disponibilidad se respondía a mano.",
    solution:
      "Una web con catálogo público, carrito y panel de administración, con backend en Node.js, Express y MongoDB. Los productos se cargan en dólares y el precio en pesos se recalcula cuando el admin actualiza la cotización.",
    features: [
      "Búsqueda de texto completo, filtros por categoría, subcategoría y marca, y scroll infinito.",
      "Precios en dólares convertidos a pesos con la cotización que carga el admin. También admite un precio fijo en pesos y muestra el precio en cuotas.",
      "Registro de técnicos matriculados: el admin recibe un email, los aprueba y desde ahí ven un precio especial.",
      "Carrito que arma el mensaje de WhatsApp con productos, cantidades, subtotales y la cotización aplicada.",
      "Kits de instalación armados desde el admin, con el precio calculado a partir de sus componentes.",
      "Panel de administración: productos, categorías, banners, usuarios y kits; métricas de vistas; importación y exportación de stock y precios por Excel; textos de la landing editables.",
    ],
    challenges: [
      {
        title: "Modelo de datos con la lógica del negocio",
        text: "Precios en dos monedas, precio distinto según el rol del usuario y sincronización con el Excel del sistema contable. Para las consultas más frecuentes (productos activos por marca, destacados, novedades) armé índices compuestos en MongoDB, y un índice de texto para la búsqueda.",
      },
      {
        title: "Excel sin pisar ediciones a mano",
        text: "La importación actualiza stock y precios desde el Excel, pero conserva los nombres de producto que el admin había corregido a mano en el panel.",
      },
      {
        title: "Migración de imágenes",
        text: "Las imágenes estaban en Cloudinary. Escribí un script que las redimensiona y comprime con Sharp y las sube a Cloudflare R2, sin cortar el servicio.",
      },
    ],
    // TODO: si hay un dato medible del v1 (consultas, pedidos), sumarlo acá.
    impact:
      "Fue el primer catálogo online del negocio. Lo iteré en producción con ramas y Pull Requests, y sentó las bases de la v2.",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "React Router 7",
      "Node.js",
      "Express 5",
      "MongoDB / Mongoose",
      "JWT",
      "Cloudflare R2",
      "Sharp",
      "Multer",
      "XLSX",
      "Nodemailer",
      "Vercel",
    ],
    metrics: [{ value: "17", label: "Pull Requests mergeados" }],
    image: "catalogo-basico-listado.jpg",
    liveUrl: "https://catalogoayp.vercel.app",
    repoUrl: null, // TODO: el repo es público (Nicolomano/catalogoAyp); sumarlo después de revisar los .env del historial
    gallery: [
      {
        file: "catalogo-basico-listado.jpg",
        alt: "Listado con filtros por categoría, precio en pesos y en cuotas",
      },
      { file: "catalogo-basico-detalle.jpg", alt: "Detalle de un producto" },
      {
        file: "catalogo-basico-kit.jpg",
        alt: "Kit de instalación: se eligen medidas y cantidades y el total se calcula solo",
      },
    ],
    video: null,
    type: "Web",
    private: false,
    featured: false,
    year: "2024",
    role: "Diseño y desarrollo full-stack",
    status: "Reemplazado por la v2",
    evolutionNote:
      "Carrito con pedido por WhatsApp y precios en dólares según la cotización.",
  },
  {
    id: "catalogo-avanzado",
    title: "Catálogo A&P v2",
    shortDescription:
      "Catálogo online y sistema de pedidos de A&P Refrigeración: 3.900+ productos, registro de técnicos y pedidos por WhatsApp.",
    fullDescription:
      "Catálogo online y sistema de pedidos para A&P Refrigeración, una casa de repuestos de refrigeración. Reemplazó al primer catálogo: además de mostrar productos, busca con tolerancia a errores, valida técnicos matriculados y arma el pedido con el precio calculado en el servidor.",
    problem:
      "Una casa de repuestos con más de 3.900 productos cargados en un sistema contable con nombres abreviados (“MOTOC.”, “FILCAP”, “TUBO DE NITRO”). Los clientes, técnicos de refrigeración, buscan con nombres coloquiales y errores de tipeo, y piden por WhatsApp. Además, el negocio tiene un precio diferenciado para técnicos matriculados, que hay que validar antes de otorgarlo.",
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
      {
        title: "Importación masiva sin timeouts",
        text: "La importación del Excel del sistema contable se cortaba por timeout. La refactoricé para escribir con bulkWrite de Mongoose en lotes de 500 productos.",
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
      "sharp (WebP)",
    ],
    metrics: [
      { value: "3.900+", label: "productos en catálogo", highlight: true },
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
    year: "2025",
    role: "Diseño y desarrollo full-stack",
    status: "En producción",
    evolutionNote:
      "Búsqueda tolerante a errores, SEO por categoría y precio validado en el servidor.",
  },
  {
    id: "pwa-stock",
    title: "PWA Stock",
    shortDescription:
      "App interna para controlar el stock desde el celular, conectada a la base del sistema de gestión: consultas, ajustes, recepción de mercadería, movimientos entre depósitos, faltantes y etiquetas.",
    fullDescription:
      "Aplicación web progresiva que el personal instala en el celular. Se conecta directamente a la base SQL Server del software administrativo que ya usaba el negocio, así que no hubo que migrar datos ni cambiar de sistema: lo que se hace desde el celular aparece al instante en el sistema, y al revés.",
    problem:
      "El stock se manejaba con un software administrativo de escritorio instalado en 4 computadoras, que se compartían entre muchas más personas de ventas y depósito. Consultar un precio, ajustar stock, recibir mercadería o pasar productos entre el salón y el depósito obligaba a buscar una computadora libre, lejos de donde estaba el producto, y no quedaba registro de quién había hecho cada cambio.",
    solution:
      "Una PWA conectada a la misma base SQL Server del sistema administrativo, sin tocar sus tablas. Desde el celular se busca un producto, se ve el stock de cada depósito y se corrige en el momento, y cada movimiento queda registrado con su autor.",
    features: [
      "Búsqueda por código de barras, código del fabricante o nombre, con precio al público y al gremio (IVA incluido) y stock total y por depósito.",
      "Ajustes de stock por entrada, salida o cantidad exacta, con un botón Deshacer que revierte el último cambio sin pisar los movimientos posteriores.",
      "Recepción de mercadería armada como carrito: borrador, ítems y confirmación que impacta el stock. Con historial y anulación que revierte el stock.",
      "Movimientos entre depósitos tipo remito: avisa si no alcanza el stock en el origen y genera una hoja A4 en PDF que se imprime directo en la impresora del local.",
      "Faltantes en dos listas: “a reponer” para compras (exportable a Excel, con cada producto marcable como pedido) y “traer de depósito” para reponer el salón.",
      "Etiquetas con código de barras en una impresora térmica, y sincronización automática cada 20 segundos sin perder lo que se está cargando.",
    ],
    challenges: [
      {
        title: "Integración sin tocar el sistema existente",
        text: "Aprendí cómo funciona la base del software administrativo a partir de sus datos (stock consolidado contra movimientos por depósito) y escribo los movimientos en su mismo formato, para que el sistema los reconozca como propios. Lo que necesita solo la app vive en tablas aparte.",
      },
      {
        title: "Integridad de datos",
        text: "Confirmar o anular cargas y movimientos son operaciones de varios pasos, así que corren dentro de transacciones. El Deshacer aplica el movimiento inverso en vez de fijar un valor absoluto, para no perder cambios hechos al mismo tiempo por otra persona.",
      },
      {
        title: "Impresoras reales",
        text: "Las etiquetas salen por una impresora térmica SATO: los comandos EPL2 los genero a mano para un rollo de dos columnas. Las hojas de movimiento son PDFs hechos con PDFKit que se imprimen sin diálogo vía SumatraPDF, todo desde un servidor Node en Windows.",
      },
      {
        title: "Infraestructura mínima",
        text: "Corre en la misma PC del local, que tiene 8 GB de RAM y los comparte con SQL Server. Desde afuera se accede con un túnel ngrok de dominio fijo, sin pagar hosting.",
      },
      {
        title: "JavaScript sin framework, a propósito",
        text: "Un server.js de unas 800 líneas y un index.html de 1.400. Cualquiera lo puede mantener y se actualiza con un git pull en la PC del local.",
      },
    ],
    // TODO: si hay un dato medible (cargas registradas, tiempo ahorrado), sumarlo acá.
    impact:
      "El personal consulta, carga y mueve stock desde el celular, en el salón o en el depósito. Compras tiene una lista de faltantes siempre al día, y cada cambio de stock queda registrado con su autor.",
    stack: [
      "Node.js",
      "Express",
      "SQL Server (mssql)",
      "JavaScript (sin framework)",
      "PWA",
      "PDFKit",
      "ExcelJS",
      "EPL2 (impresora térmica)",
      "ngrok",
    ],
    metrics: [
      { value: "4", label: "computadoras para todo el equipo antes de la app" },
      { value: "2", label: "depósitos sincronizados" },
      { value: "0", label: "cambios en las tablas del sistema existente" },
    ],
    image: "pwa-stock-buscar.jpg",
    liveUrl: null,
    repoUrl: null,
    // Las capturas muestran usuarios internos (empleados), no datos de clientes ni técnicos.
    gallery: [
      {
        file: "pwa-stock-buscar.jpg",
        alt: "Búsqueda por código de barras: precios, stock total y por depósito",
        phone: true,
      },
      {
        file: "pwa-stock-ajuste.jpg",
        alt: "Ajuste de stock, stock mínimo e impresión de etiquetas",
        phone: true,
      },
      {
        file: "pwa-stock-carga.jpg",
        alt: "Carga de mercadería confirmada, con el depósito de cada producto",
        phone: true,
      },
      {
        file: "pwa-stock-movimiento.jpg",
        alt: "Movimiento del local al depósito, con hoja imprimible y PDF",
        phone: true,
      },
      {
        file: "pwa-stock-faltantes.jpg",
        alt: "Faltantes para compras: productos bajo el stock mínimo",
        phone: true,
      },
      {
        file: "pwa-stock-traer.jpg",
        alt: "Faltantes que hay que traer del depósito al local",
        phone: true,
      },
    ],
    video: null,
    type: "PWA",
    private: true,
    featured: true,
    year: "2026",
    role: "Diseño y desarrollo full-stack",
    status: "En uso interno",
    evolutionNote:
      "El stock de los dos depósitos se controla desde el celular: ajustes, cargas, movimientos y faltantes.",
  },
];

export default projects;

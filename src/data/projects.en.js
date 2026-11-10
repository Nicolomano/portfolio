// English text for the projects, keyed by id. Only text lives here: images,
// stack, years and links come from projects.js (see lib/projects.js → localize).
//
//   metrics      → same order as in projects.js; each entry overrides value/label
//   galleryAlts  → same order as the gallery in projects.js
//   Any other field (title, problem, stack…) replaces the Spanish one.
//
// If you change a text in projects.js, update it here too.

const projectsEn = {
  "catalogo-basico": {
    title: "A&P Catalog",
    shortDescription:
      "A&P Refrigeración's first web catalog: a cart that sends the order over WhatsApp, USD prices converted to pesos at the current exchange rate, and an admin panel.",
    fullDescription:
      "The business's first online catalog, with its own backend. Customers search for products, fill a cart and send the order over WhatsApp; the admin panel manages products, prices, kits, banners and technicians.",
    problem:
      "The catalog has many products priced in US dollars, and peso prices change with the exchange rate. Stock was tracked in Excel spreadsheets and orders came in over WhatsApp with no structure, so every question about price and availability was answered by hand.",
    solution:
      "A website with a public catalog, a cart and an admin panel, backed by Node.js, Express and MongoDB. Products are entered in US dollars, and the peso price is recalculated whenever the admin updates the exchange rate.",
    features: [
      "Full-text search, filters by category, subcategory and brand, and infinite scroll.",
      "USD prices converted to pesos with the exchange rate the admin enters. A fixed peso price is also supported, and installment prices are shown.",
      "Sign-up for licensed technicians: the admin gets an email, approves them, and from then on they see a special price.",
      "A cart that builds the WhatsApp message with products, quantities, subtotals and the exchange rate applied.",
      "Installation kits put together in the admin panel, priced from their components.",
      "Admin panel: products, categories, banners, users and kits; view metrics; Excel import and export of stock and prices; editable landing-page copy.",
    ],
    challenges: [
      {
        title: "A data model built around the business",
        text: "Prices in two currencies, different prices depending on the user's role, and syncing with the accounting system's Excel file. For the most frequent queries (active products by brand, featured, new arrivals) I added compound indexes in MongoDB, plus a text index for search.",
      },
      {
        title: "Excel imports that keep manual edits",
        text: "The import updates stock and prices from the Excel file but keeps the product names the admin had fixed by hand in the panel.",
      },
      {
        title: "Image migration",
        text: "Images were hosted on Cloudinary. I wrote a script that resizes and compresses them with Sharp and uploads them to Cloudflare R2, without taking the site down.",
      },
    ],
    impact:
      "It was the business's first online catalog. I iterated on it in production with branches and pull requests, and it laid the groundwork for v2.",
    metrics: [{ label: "merged pull requests" }],
    galleryAlts: [
      "Product list with category filters, peso prices and installments",
      "Product detail page",
      "Installation kit: pick sizes and quantities and the total is calculated automatically",
    ],
    role: "Full-stack design and development",
    status: "Replaced by v2",
    evolutionNote: "Cart with WhatsApp ordering and USD prices at the current exchange rate.",
  },

  "catalogo-avanzado": {
    title: "A&P Catalog v2",
    shortDescription:
      "Online catalog and ordering system for A&P Refrigeración: 3,900+ products, technician sign-up and WhatsApp orders.",
    fullDescription:
      "Online catalog and ordering system for A&P Refrigeración, a refrigeration parts store. It replaced the first catalog: besides listing products, it handles typos in searches, verifies licensed technicians and builds the order with the price calculated on the server.",
    problem:
      "A parts store with more than 3,900 products loaded into an accounting system under abbreviated names (“MOTOC.”, “FILCAP”, “TUBO DE NITRO”). Customers, mostly refrigeration technicians, search using everyday names and typos, and order over WhatsApp. On top of that, the business offers a special price to licensed technicians, which has to be verified before it's granted.",
    solution:
      "A catalog with a typo-tolerant search that understands the accounting system's abbreviations, technician sign-up with license verification, and WhatsApp orders with the price recalculated on the server.",
    features: [
      "Search that corrects toward words that actually exist in the catalog (“lokring” → lockring, “tecunse” → tecumseh) and understands the accounting system's abbreviations.",
      "Technician sign-up with license verification (photo or PDF), an approval flow and a 10% discount calculated on the server.",
      "WhatsApp orders with the price recalculated on the server, without trusting what the browser sends.",
      "Product bundles priced in real time. The accounting system doesn't support bundles, so the order arrives with the breakdown of item codes for invoicing.",
      "Bulk import from the accounting system's Excel file, with a preview and protection against accidental deletions.",
      "Admin panel with two access levels, visit and search metrics, and management of banners, featured products and categories.",
    ],
    challenges: [
      {
        title: "SEO for a SPA",
        text: "Google doesn't scroll, so it only saw 24 products per category. I built server-rendered pages for search engines (Vercel Functions) with the same content users see, structured data (Product, BreadcrumbList, Store) and per-category URLs. Search Console discovered all 3,889 pages in the sitemap.",
      },
      {
        title: "Search correction",
        text: "The first version generated one-typo variants and returned absurd results (“jabon” → “labon” → “ESLABON”). I replaced it with Damerau-Levenshtein distance against a vocabulary built from the catalog itself, cached in memory.",
      },
      {
        title: "A silent data bug",
        text: "Chaining two .select() calls in Mongoose doesn't merge them. The panel showed that almost no technicians had uploaded their license, when in fact they had.",
      },
      {
        title: "Security audit",
        text: "An unvalidated parameter allowed downloading the entire catalog in a single request (842 KB), and invalid pagination returned 500 errors. I added JWT authentication with session revocation and protection against NoSQL injection in request bodies.",
      },
      {
        title: "Bulk import without timeouts",
        text: "Importing the accounting system's Excel file timed out. I refactored it to write with Mongoose's bulkWrite in batches of 500 products.",
      },
    ],
    quality:
      "More than 180 automated tests against a disposable in-memory database seeded with real catalog data. Every fix was checked against production before and after.",
    impact:
      "In production at refrigeracionayp.com. Searches that used to return nothing now find the product: “rulemanes” (bearings) went from 0 to 60 results.",
    metrics: [
      { value: "3,900+", label: "products in the catalog" },
      { value: "3,889", label: "pages discovered by Google" },
      { label: "automated tests" },
      { label: "results for “rulemanes”" },
    ],
    galleryAlts: [
      "Search with a typo: “lokrin” returns results for lockring",
      "Catalog with the 10% discount for approved technicians",
      "Bundle page: what it includes, with each product's code for invoicing",
      "Catalog on a phone",
      "Admin panel: product management and Excel import",
      "Bundle panel with the price calculated from its products",
    ],
    role: "Full-stack design and development",
    status: "In production",
    evolutionNote: "Typo-tolerant search, per-category SEO and server-validated prices.",
  },

  "pwa-stock": {
    shortDescription:
      "Internal app to manage stock from a phone, connected to the management system's database: lookups, adjustments, goods receiving, transfers between warehouses, shortage lists and labels.",
    fullDescription:
      "A progressive web app that staff install on their phones. It connects directly to the SQL Server database of the management software the business already used, so there was no data migration and no change of system: whatever is done on the phone shows up in the system instantly, and vice versa.",
    problem:
      "Stock was managed with desktop administration software installed on 4 computers, shared by many more people in sales and the warehouse. Checking a price, adjusting stock, receiving goods or moving products between the store floor and the warehouse meant finding a free computer, away from where the product was, and there was no record of who made each change.",
    solution:
      "A PWA connected to the same SQL Server database as the management system, without touching its tables. From a phone, staff look up a product, see the stock in each warehouse and correct it on the spot, and every movement is logged with its author.",
    features: [
      "Search by barcode, manufacturer code or name, showing retail and trade prices (VAT included), total stock and stock per warehouse.",
      "Stock adjustments (in, out or exact quantity) with an Undo button that reverts the last change without overwriting later movements.",
      "Goods receiving built like a cart: draft, items and a confirmation that updates stock. With history and cancellation that reverts the stock.",
      "Transfers between warehouses, like a delivery note: it warns if there isn't enough stock at the source and generates an A4 PDF that prints straight to the store's printer.",
      "Shortages in two lists: “to reorder” for purchasing (exportable to Excel, with each product markable as ordered) and “bring from warehouse” to restock the store floor.",
      "Barcode labels on a thermal printer, and automatic sync every 20 seconds without losing what's being entered.",
    ],
    challenges: [
      {
        title: "Integrating without touching the existing system",
        text: "I worked out how the management software's database works from its data (consolidated stock versus per-warehouse movements) and write movements in the same format, so the system recognizes them as its own. Anything only the app needs lives in separate tables.",
      },
      {
        title: "Data integrity",
        text: "Confirming or cancelling receipts and transfers are multi-step operations, so they run inside transactions. Undo applies the inverse movement instead of setting an absolute value, so changes made at the same time by someone else aren't lost.",
      },
      {
        title: "Real printers",
        text: "Labels come out of a SATO thermal printer: I generate the EPL2 commands by hand for a two-column roll. Transfer sheets are PDFs built with PDFKit and printed silently through SumatraPDF, all from a Node server on Windows.",
      },
      {
        title: "Minimal infrastructure",
        text: "It runs on the store's own PC, which has 8 GB of RAM shared with SQL Server. It's reachable from outside through an ngrok tunnel with a fixed domain, with no hosting costs.",
      },
      {
        title: "Plain JavaScript, on purpose",
        text: "A server.js of about 800 lines and an index.html of 1,400. Anyone can maintain it, and it's updated with a git pull on the store's PC.",
      },
    ],
    impact:
      "Staff look up, receive and move stock from their phones, on the store floor or in the warehouse. Purchasing has an always up-to-date shortage list, and every stock change is logged with its author.",
    stack: [
      "Node.js",
      "Express",
      "SQL Server (mssql)",
      "JavaScript (no framework)",
      "PWA",
      "PDFKit",
      "ExcelJS",
      "EPL2 (thermal printer)",
      "ngrok",
    ],
    metrics: [
      { label: "computers for the whole team before the app" },
      { label: "synced warehouses" },
      { label: "changes to the existing system's tables" },
    ],
    galleryAlts: [
      "Barcode search: prices, total stock and stock per warehouse",
      "Stock adjustment, minimum stock and label printing",
      "Confirmed goods receipt, with the warehouse for each product",
      "Transfer from the store to the warehouse, with a printable sheet and PDF",
      "Shortages for purchasing: products below minimum stock",
      "Shortages to bring from the warehouse to the store",
    ],
    role: "Full-stack design and development",
    status: "In internal use",
    evolutionNote:
      "Stock in both warehouses is managed from a phone: adjustments, receipts, transfers and shortages.",
  },
};

export default projectsEn;

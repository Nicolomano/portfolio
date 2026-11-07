// Ficha técnica "clave: valor" alineada en dos columnas.
// items: [["Rol", "Full-stack"], ["Año", "2024"], ...]
export default function SpecList({ items, className = "" }) {
  return (
    <dl className={`border-t border-ink ${className}`}>
      {items.map(([key, value]) => (
        <div
          key={key}
          className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-2.5"
        >
          <dt className="label pt-0.5 text-ink-soft">{key}</dt>
          <dd className="min-w-0 text-[0.9375rem] leading-snug">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

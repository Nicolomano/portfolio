// Encabezado numerado de sección: "01  CASOS DE ESTUDIO ............ Ver índice →"
export default function SectionHeader({ number, title, id, children }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-ink pt-3">
      <h2 id={id} className="label flex gap-4">
        <span className="text-accent-ink">{number}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

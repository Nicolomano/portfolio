// Marco de celular dibujado solo con CSS (sin imagen de mockup).
export default function PhoneFrame({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[230px] rounded-[2.25rem] border-[9px] border-ink bg-ink ${className}`}
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.6rem] bg-paper">
        <span
          aria-hidden="true"
          className="absolute top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink"
        />
        {children}
      </div>
    </div>
  );
}

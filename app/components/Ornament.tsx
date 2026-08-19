// Signature motif: an eight-point girih star built from two overlaid squares,
// echoing the majolica star-and-cross tiling on Registan's madrasas.
// Reused as a section divider so it reads as the site's mark, not a stock icon.
export function Ornament({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={color}
    >
      <rect x="14" y="14" width="36" height="36" strokeWidth="1.25" transform="rotate(0 32 32)" />
      <rect x="14" y="14" width="36" height="36" strokeWidth="1.25" transform="rotate(45 32 32)" />
      <circle cx="32" cy="32" r="4.5" strokeWidth="1.25" />
    </svg>
  );
}

export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-gold/50" />
      <Ornament className="h-4 w-4 text-gold" />
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}

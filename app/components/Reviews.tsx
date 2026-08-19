// No client quotes on hand yet, so this links straight to MiraLux's own
// review highlight on Instagram. Swap in 2–3 real quotes here once ready.
const PROOF = [
  { value: "17 лет", label: "на рынке туризма Узбекистана" },
  { value: "5 000+", label: "подписчиков в Instagram" },
  { value: "2009", label: "год основания компании" },
];

export function Reviews() {
  return (
    <section className="border-t border-line bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Отзывы</p>
        <h2 className="font-display mt-3 text-4xl leading-tight text-cream sm:text-5xl">
          Нам доверяют путешественники
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PROOF.map((p) => (
            <div key={p.label} className="border-t border-gold/30 pt-5">
              <p className="font-display text-4xl text-cream">{p.value}</p>
              <p className="mt-2 text-sm text-cream/45">{p.label}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-md text-sm text-cream/45">
          Читайте живые истории и отзывы наших туристов в разделе «Отзывы»
          в Instagram.
        </p>
        <a
          href="https://instagram.com/miraluxtravelagency"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-cream transition hover:text-gold"
        >
          Смотреть отзывы в Instagram <span>→</span>
        </a>
      </div>
    </section>
  );
}

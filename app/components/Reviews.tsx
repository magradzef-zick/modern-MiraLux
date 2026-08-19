import { OrnamentDivider } from "./Ornament";

// No client quotes on hand yet, so this links straight to MiraLux's own
// review highlight on Instagram. Swap in 2–3 real quotes here once ready.
const PROOF = [
  { value: "17 лет", label: "на рынке туризма Узбекистана" },
  { value: "5 000+", label: "подписчиков в Instagram" },
  { value: "2009", label: "год основания компании" },
];

export function Reviews() {
  return (
    <section className="bg-sand px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs tracking-[0.2em] text-terracotta uppercase">Отзывы</p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          Нам доверяют путешественники
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PROOF.map((p) => (
            <div key={p.label}>
              <p className="font-display text-4xl text-terracotta">{p.value}</p>
              <p className="mt-2 text-sm text-ink/60">{p.label}</p>
            </div>
          ))}
        </div>

        <OrnamentDivider className="mt-14 text-terracotta" />

        <p className="mx-auto mt-8 max-w-md text-sm text-ink/60">
          Читайте живые истории и отзывы наших туристов в разделе «Отзывы»
          в Instagram.
        </p>
        <a
          href="https://instagram.com/miraluxtravelagency"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full border border-terracotta/40 px-7 py-3 text-sm text-ink transition hover:bg-terracotta hover:text-cream"
        >
          Смотреть отзывы в Instagram
        </a>
      </div>
    </section>
  );
}

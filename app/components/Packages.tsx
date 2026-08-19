import Image from "next/image";

const PACKAGES = [
  {
    name: "Ташкент — Самарканд",
    duration: "5 дней / 4 ночи",
    detail: "Скоростным поездом «Афросиёб»",
    price: "от $636",
    img: "/images/samarkand.jpg",
  },
  {
    name: "Классический Узбекистан",
    duration: "11 дней / 10 ночей",
    detail: "Ташкент — Самарканд — Бухара — Хива",
    price: "от $548",
    img: "/images/khiva.jpg",
  },
  {
    name: "Ташкент — Самарканд — Бухара",
    duration: "7 дней / 6 ночей",
    detail: "Три жемчужины Шёлкового пути",
    price: "цена по запросу",
    img: "/images/bukhara.jpg",
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Готовые туры</p>
            <h2 className="font-display mt-3 text-4xl text-cream sm:text-5xl">
              Маршруты, которые{" "}
              <em className="text-gold font-normal">уже работают</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/miraluxtravelagency"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-cream/70 underline decoration-gold/40 underline-offset-4 hover:text-gold"
          >
            Индивидуальный маршрут? Напишите нам →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-ink-2"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs tracking-[0.15em] text-teal-light uppercase">
                  {p.duration}
                </p>
                <p className="font-display mt-2 text-xl text-cream">{p.name}</p>
                <p className="mt-1 text-sm text-cream/60">{p.detail}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-lg text-gold">{p.price}</span>
                  <a
                    href="tel:+998712098677"
                    className="text-sm text-cream/80 underline underline-offset-4 hover:text-gold"
                  >
                    Забронировать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

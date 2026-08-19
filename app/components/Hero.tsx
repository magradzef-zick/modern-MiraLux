import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <Image
        src="/images/samarkand-night.jpg"
        alt="Регистан вечером, Самарканд"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink from-10% via-ink/55 via-45% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.3em] text-cream/60 uppercase">
          <span className="h-px w-8 bg-gold" />
          С 2009 года — 17 лет в туризме
        </p>
        <h1 className="font-display max-w-3xl text-6xl leading-[1.02] font-normal text-cream sm:text-7xl md:text-8xl">
          Шёлковый путь
          <br />
          <em className="text-gold font-normal">начинается</em> здесь
        </h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-cream/65">
          MIRA‑LUX — туристическая компания в Ташкенте: маршруты по Самарканду,
          Бухаре и Хиве, а также путешествия по всему миру. Визы, авиабилеты,
          отели и гиды — под ключ.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href="#packages"
            className="bg-gold px-8 py-4 text-sm font-medium tracking-wide text-ink transition hover:bg-cream"
          >
            Подобрать тур
          </a>
          <a
            href="https://instagram.com/miraluxtravelagency"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-cream/80 transition hover:text-gold"
          >
            Написать в Instagram
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

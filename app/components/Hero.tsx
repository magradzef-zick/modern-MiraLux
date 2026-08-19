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
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.2em] text-gold uppercase">
          С 2009 года · 17 лет с путешественниками
        </p>
        <h1 className="font-display max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          Шёлковый путь <em className="text-gold font-normal">начинается</em>{" "}
          с одного звонка
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/80">
          MIRA‑LUX — туристическая компания в Ташкенте: авторские туры по Самарканду,
          Бухаре и Хиве, а также путешествия по всему миру. Визы, авиабилеты, отели и
          гиды — под ключ.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#packages"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-teal-light"
          >
            Подобрать тур
          </a>
          <a
            href="https://instagram.com/miraluxtravelagency"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm text-cream transition hover:border-gold hover:text-gold"
          >
            Написать в Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

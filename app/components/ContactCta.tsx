export function ContactCta() {
  return (
    <section id="contact" className="border-t border-line bg-ink-2 px-5 py-20 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-display max-w-lg text-3xl leading-tight text-cream sm:text-4xl">
            Готовы к путешествию? Напишите нам сегодня.
          </h2>
          <p className="mt-3 text-cream/55">
            Ответим в течение дня и подберём маршрут под ваш бюджет и даты.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          <a
            href="tel:+998712098677"
            className="bg-gold px-8 py-4 text-sm font-medium tracking-wide text-ink transition hover:bg-cream"
          >
            Позвонить: +998 71 209‑86‑77
          </a>
          <a
            href="mailto:miralux-travel@mail.ru"
            className="inline-flex items-center gap-2 text-sm text-cream/80 transition hover:text-gold"
          >
            Написать на почту <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

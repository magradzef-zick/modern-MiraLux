export function ContactCta() {
  return (
    <section id="contact" className="girih-bg bg-cobalt px-5 py-20 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-display max-w-lg text-3xl text-cream sm:text-4xl">
            Готовы к путешествию? Напишите нам сегодня.
          </h2>
          <p className="mt-3 text-cream/70">
            Ответим в течение дня и подберём маршрут под ваш бюджет и даты.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+998712098677"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-teal-light"
          >
            Позвонить: +998 71 209‑86‑77
          </a>
          <a
            href="mailto:miralux-travel@mail.ru"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm text-cream transition hover:border-gold hover:text-gold"
          >
            Написать на почту
          </a>
        </div>
      </div>
    </section>
  );
}

const NAV = [
  { href: "#destinations", label: "Направления" },
  { href: "#services", label: "Услуги" },
  { href: "#packages", label: "Туры" },
  { href: "#about", label: "О нас" },
];

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-cream">
              MIRA<span className="text-gold">LUX</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/60">
              Туры по Узбекистану и миру. На рынке туризма с 2009 года.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-cream/50 uppercase">Разделы</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-cream/70 hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-cream/50 uppercase">Контакты</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="tel:+998712098677" className="hover:text-gold">
                  +998 71 209‑86‑77
                </a>
              </li>
              <li>
                <a href="mailto:miralux-travel@mail.ru" className="hover:text-gold">
                  miralux-travel@mail.ru
                </a>
              </li>
              <li className="text-cream/60">
                Ташкент, Юнусабадский район,
                <br />
                массив Киёт, 60, офис 23
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-cream/50 uppercase">Мы в соцсетях</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <a
                  href="https://instagram.com/miraluxtravelagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/miraluxtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://mira-lux.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  mira-lux.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MIRA-LUX. Все права защищены.</p>
          <p>Сделано с любовью к путешествиям.</p>
        </div>
      </div>
    </footer>
  );
}

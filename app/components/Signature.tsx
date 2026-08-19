import Image from "next/image";

const FEATURES = [
  "Индивидуальные маршруты",
  "Частные и групповые туры",
  "Визовая поддержка",
  "Авиабилеты и отели",
];

export function Signature() {
  return (
    <section id="about" className="border-t border-line bg-ink-2 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">С 2009 года</p>
          <h2 className="font-display mt-3 text-4xl leading-tight text-cream sm:text-5xl">
            Каждый маршрут собран <em className="text-gold font-normal">вручную</em>
          </h2>
          <p className="mt-6 max-w-lg text-cream/60">
            MIRA‑LUX начиналась с приёма делегаций по профсоюзным каналам, а сегодня —
            это команда, которая держит travel‑рынок Узбекистана 17 лет. Мы знаем
            Шёлковый путь изнутри и так же тщательно собираем поездки за рубеж:
            от Антальи до дальних маршрутов.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="border-l border-gold/40 pl-4 text-sm text-cream/75">
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#packages"
            className="mt-10 inline-flex items-center gap-2 text-sm text-cream transition hover:text-gold"
          >
            Смотреть туры <span>→</span>
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/bukhara-courtyard.jpg"
              alt="Внутренний двор мечети Калян, Бухара"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-6 w-[calc(100%-3rem)] border border-gold/25 bg-ink/95 p-6 backdrop-blur sm:w-auto">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Популярный маршрут</p>
            <p className="font-display mt-2 text-xl text-cream">Ташкент — Самарканд</p>
            <p className="mt-1 text-sm text-cream/50">Скоростным поездом · 5 дней / 4 ночи</p>
            <p className="mt-3 text-lg text-cream">от $636</p>
          </div>
        </div>
      </div>
    </section>
  );
}

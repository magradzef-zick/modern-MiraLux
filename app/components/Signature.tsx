import Image from "next/image";
import { Ornament } from "./Ornament";

const FEATURES = [
  "Индивидуальные маршруты",
  "Частные и групповые туры",
  "Визовая поддержка",
  "Бронирование отелей и авиабилетов",
];

export function Signature() {
  return (
    <section id="about" className="girih-bg bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">С 2009 года</p>
          <h2 className="font-display mt-3 text-4xl text-cream sm:text-5xl">
            Каждый маршрут собран{" "}
            <em className="text-gold font-normal">вручную</em>
          </h2>
          <p className="mt-6 max-w-lg text-cream/75">
            MIRA‑LUX начиналась с приёма делегаций по профсоюзным каналам, а сегодня —
            это команда, которая держит travel‑рынок Узбекистана 17 лет. Мы знаем
            Шёлковый путь изнутри и так же тщательно собираем поездки за рубеж:
            от Антальи до дальних маршрутов.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-cream/85">
                <Ornament className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#packages"
            className="mt-10 inline-block rounded-full border border-gold/60 px-7 py-3 text-sm text-cream transition hover:bg-gold hover:text-ink"
          >
            Смотреть туры
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/bukhara-courtyard.jpg"
              alt="Внутренний двор мечети Калян, Бухара"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-gold/30 bg-ink-2/95 p-6 shadow-2xl backdrop-blur sm:left-6 sm:w-auto sm:translate-x-0">
            <p className="text-xs tracking-[0.15em] text-gold uppercase">Популярный маршрут</p>
            <p className="font-display mt-2 text-xl text-cream">Ташкент — Самарканд</p>
            <p className="mt-1 text-sm text-cream/60">Скоростным поездом · 5 дней / 4 ночи</p>
            <p className="mt-3 text-lg text-teal-light">от $636</p>
          </div>
        </div>
      </div>
    </section>
  );
}

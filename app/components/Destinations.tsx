import Image from "next/image";
import { OrnamentDivider } from "./Ornament";

const DESTINATIONS = [
  {
    name: "Самарканд",
    tag: "Регистан, Шахи-Зинда",
    img: "/images/samarkand.jpg",
  },
  {
    name: "Бухара",
    tag: "Пои-Калян, старый город",
    img: "/images/bukhara.jpg",
  },
  {
    name: "Хива",
    tag: "Ичан-Кала изнутри",
    img: "/images/khiva.jpg",
  },
  {
    name: "Ташкент",
    tag: "Столица вечером",
    img: "/images/tashkent.jpg",
  },
  {
    name: "Чарвак",
    tag: "Горы и бирюзовое озеро",
    img: "/images/charvak.jpg",
  },
  {
    name: "Анталья",
    tag: "Зарубежные туры, Турция",
    img: "/images/antalya.jpg",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-terracotta uppercase">Направления</p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            Узбекистан для начала —{" "}
            <em className="text-terracotta font-normal">мир</em> без границ дальше
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink"
            >
              <Image
                src={d.img}
                alt={d.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl text-cream">{d.name}</p>
                <p className="mt-1 text-sm text-cream/70">{d.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <OrnamentDivider className="mt-16 text-terracotta" />
      </div>
    </section>
  );
}

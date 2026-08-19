import Image from "next/image";

const DESTINATIONS = [
  {
    name: "Самарканд",
    tag: "Регистан, Шахи-Зинда",
    img: "/images/samarkand.jpg",
    feature: true,
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
    name: "Шахрисабз",
    tag: "Родина Амира Темура",
    img: "/images/shakhrisabz.jpg",
  },
  {
    name: "Чарвак",
    tag: "Горы и бирюзовое озеро",
    img: "/images/charvak.jpg",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] text-gold uppercase">Направления</p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-cream sm:text-5xl">
              Пять городов Шёлкового пути
            </h2>
          </div>
          <p className="max-w-xs text-sm text-cream/50">
            Каждый маршрут можно собрать под ваши даты и интересы — от однодневной
            поездки до полного кольца по стране.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className={`group relative aspect-[4/5] overflow-hidden bg-ink-2 lg:aspect-auto lg:h-full ${
                d.feature ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <Image
                src={d.img}
                alt={d.name}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p
                  className={`font-display text-cream ${d.feature ? "text-3xl" : "text-xl"}`}
                >
                  {d.name}
                </p>
                <p className="mt-1 text-sm text-cream/55">{d.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

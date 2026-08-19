const SERVICES = [
  {
    title: "Туры по Узбекистану",
    desc: "Самарканд, Бухара, Хива, Ташкент — частные и групповые маршруты.",
  },
  {
    title: "Зарубежные туры",
    desc: "Турция, ОАЭ и другие направления — от подбора до вылета.",
  },
  {
    title: "Визы",
    desc: "Подготовка документов и сопровождение визового процесса.",
  },
  {
    title: "Авиабилеты",
    desc: "Подбор и бронирование перелётов по лучшим тарифам.",
  },
  {
    title: "Отели",
    desc: "Бронирование отелей в Узбекистане и за рубежом.",
  },
  {
    title: "Гиды и трансферы",
    desc: "Русско- и англоговорящие гиды, встреча и трансфер по городу.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Услуги</p>
          <h2 className="font-display mt-3 text-4xl leading-tight text-cream sm:text-5xl">
            Всё для поездки — в одном месте
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="border-r border-b border-line p-8">
              <p className="font-display text-xl text-cream">{s.title}</p>
              <p className="mt-2 text-sm text-cream/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

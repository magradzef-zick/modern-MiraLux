const ITEMS = [
  { label: "17 лет опыта", note: "На рынке туризма Узбекистана с 2009 года" },
  { label: "Визы и авиабилеты", note: "Оформим документы и подберём перелёт" },
  { label: "Частные туры", note: "Личный гид по Шёлковому пути" },
  { label: "Поддержка 24/7", note: "На связи на каждом этапе поездки" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="border-l border-line pl-4">
            <p className="text-sm font-medium text-cream">{item.label}</p>
            <p className="mt-1 text-xs text-cream/45">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const ITEMS = [
  { label: "17 лет опыта", note: "На рынке туризма Узбекистана с 2009 года" },
  { label: "Визы и авиабилеты", note: "Оформим документы и подберём перелёт" },
  { label: "Личный гид", note: "Частные и групповые туры по Шёлковому пути" },
  { label: "Поддержка 24/7", note: "На связи на каждом этапе поездки" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-ink/10 bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:px-8 md:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.label}>
            <p className="font-display text-lg text-ink">{item.label}</p>
            <p className="mt-1 text-sm text-ink/60">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

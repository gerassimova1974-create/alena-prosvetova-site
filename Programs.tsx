import { Check } from "lucide-react";
import { SectionHeading, WhatsAppButton } from "./Brand";

const PROGRAMS = [
  { name: "Накопления", desc: "Формирование капитала регулярными взносами на выбранный срок.", features: ["Срок и взнос под ваш бюджет", "Страховая защита жизни", "Выплата по окончании срока"] },
  { name: "Образование детей", desc: "Средства на обучение ребёнка к нужному возрасту.", features: ["Планирование к дате поступления", "Защита на весь срок", "Программа на ребёнка или родителя"], featured: true },
  { name: "Защита семьи", desc: "Финансовая поддержка близких на случай непредвиденного.", features: ["Выбор выгодоприобретателя", "Дополнительные покрытия", "Подбор страховой суммы"] },
];

export function Programs() {
  return (
    <section id="programs" className="section-y">
      <div className="container-page">
        <SectionHeading center eyebrow="Накопительная программа" title="Выберите свою цель" lead="Условия, взнос и страховая сумма рассчитываются индивидуально на бесплатной консультации." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article key={p.name} className={`flex flex-col rounded-3xl p-7 md:p-8 ${p.featured ? "bg-ink-gradient text-ink-foreground shadow-lift" : "border border-border bg-card shadow-soft"}`}>
              <h3 className="text-3xl">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.featured ? "text-ink-muted" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-gold" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton className="mt-8 w-full" variant={p.featured ? "ghostLight" : "whatsapp"} message={`Здравствуйте, Алёна! Интересует программа «${p.name}».`}>
                Узнать условия
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

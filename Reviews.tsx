import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./Brand";

const REVIEWS = [
  {
    name: "Айгуль К.",
    meta: "38 лет, бухгалтер",
    text: "Долго откладывала, думала — потом. Алёна за одну встречу показала, сколько я теряю каждый год. Теперь у дочки есть накопления на университет, и я спокойна.",
  },
  {
    name: "Сергей Михайлов",
    meta: "45 лет, предприниматель",
    text: "Как бизнесмен ценю цифры. Алёна всё объяснила прозрачно, без давления, и подобрала взнос, который комфортен для семейного бюджета.",
  },
  {
    name: "Динара Жумабаева",
    meta: "31 год, мама двоих детей",
    text: "Главное для меня — защита семьи. Теперь я знаю, что у детей есть финансовая поддержка. Оформили всё за один день прямо в Петропавловске.",
  },
  {
    name: "Виктор и Ольга Л.",
    meta: "52 и 49 лет",
    text: "Думали, что в нашем возрасте уже поздно. Оказалось — нет. Подобрали накопительную программу под наши цели. Жалеем только, что не начали раньше.",
  },
];

const STATS = [
  { value: "350+", label: "семей в Петропавловске" },
  { value: "4.9", label: "средняя оценка клиентов" },
  { value: "с 2014", label: "в страховании жизни" },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-y">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Отзывы"
            title="Нам доверяют свои накопления"
            lead="Истории клиентов из Петропавловска и Северо-Казахстанской области."
          />
          <dl className="grid grid-cols-3 gap-4 lg:min-w-[26rem]">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-border bg-card p-6 shadow-soft md:w-auto"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <Quote className="size-6 text-primary/30" />
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid size-10 place-items-center rounded-full bg-primary-gradient font-display text-sm font-bold text-primary-foreground">
                  {r.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

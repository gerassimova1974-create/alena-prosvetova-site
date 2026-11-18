import { Award, Building2, FileCheck2, Globe2, ShieldCheck } from "lucide-react";
import license from "@/assets/standard_life_license.jpg";
import hannover from "@/assets/hannover_re_letter.jpg";
import { SectionHeading } from "./Brand";

const FACTS = [
  { icon: Building2, value: "2007", label: "год основания АО КСЖ «Standard Life»" },
  { icon: FileCheck2, value: "№ 44-1/1", label: "лицензия Нацбанка РК от 09.11.2007" },
  { icon: Award, value: "B+", label: "рейтинг Fitch Ratings, прогноз «Стабильный»" },
  { icon: Globe2, value: "Hannover Re", label: "перестрахование — один из лидеров мира" },
  { icon: ShieldCheck, value: "ФГСВ", label: "участник Фонда гарантирования страховых выплат" },
];

const PARTNERS = ["Standard Life", "Halyk Bank", "Kaspi.kz", "Bank CenterCredit"];

export function Trust() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Надёжность"
          title="Надёжный страховой партнёр"
          lead="Я работаю с АО «Компания по страхованию жизни «Standard Life» — одной из старейших страховых компаний Казахстана."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {FACTS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`rounded-2xl bg-card p-5 shadow-soft ${i === FACTS.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <Icon className="size-5 text-primary" />
              <p className="mt-3 font-display text-lg font-bold text-foreground md:text-xl">{value}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { img: license, title: "Лицензия Национального банка РК", w: 769, h: 1087 },
            { img: hannover, title: "Подтверждение перестрахования Hannover Re", w: 736, h: 867 },
          ].map((d) => (
            <a
              key={d.title}
              href={d.img}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl bg-card p-4 shadow-soft transition-all hover:shadow-lift"
            >
              <img
                src={d.img}
                alt={d.title}
                width={d.w}
                height={d.h}
                loading="lazy"
                className="h-36 w-28 shrink-0 rounded-xl border border-border object-cover object-top transition-transform group-hover:scale-[1.03] md:h-44 md:w-36"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Документ</p>
                <p className="mt-1 font-display text-base font-bold text-foreground md:text-lg">{d.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">Нажмите, чтобы открыть</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-center text-sm font-semibold text-muted-foreground">Партнёры</p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="grid h-16 place-items-center rounded-2xl border border-border bg-card font-display text-sm font-bold text-foreground/70"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

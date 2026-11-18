import { GraduationCap, HeartPulse, Landmark, ShieldCheck, Users, Target } from "lucide-react";
import family from "@/assets/family-home.jpg";
import { SectionHeading } from "./Brand";

const SERVICES = [
  { icon: Landmark, title: "Долгосрочные накопления", text: "Регулярные взносы, которые со временем складываются в финансовый капитал семьи." },
  { icon: GraduationCap, title: "Образование детей", text: "Планирование средств на обучение ребёнка к нужному сроку." },
  { icon: Users, title: "Защита близких", text: "Страховая защита жизни, которая поддержит семью в трудной ситуации." },
  { icon: Target, title: "Капитал на важные цели", text: "Жильё, свадьба, старт дела — накопления под конкретную задачу." },
];

const COVERS = [
  "Телесные повреждения в результате несчастного случая",
  "Лечение в больнице",
  "Лечение дома (больничный лист)",
  "Инвалидность 1–2 группы",
  "Освобождение от взносов при инвалидности",
  "Критические заболевания",
];

export function Services() {
  return (
    <section id="services" className="section-y bg-secondary/60">
      <div className="container-page">
        <SectionHeading eyebrow="Чем я помогаю" title="Финансовый план для вашей семьи" lead="Добровольное накопительное страхование жизни — подбираю решение под цели, возраст и бюджет." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-2xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid overflow-hidden rounded-3xl bg-card shadow-soft lg:grid-cols-2">
          <img src={family} alt="Семья дома" width={1280} height={896} loading="lazy" className="h-64 w-full object-cover sm:h-80 lg:h-full" />
          <div className="p-6 md:p-10">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              <HeartPulse className="size-5" /> Дополнительные покрытия
            </span>
            <h3 className="mt-3 text-3xl text-foreground">Защита на случай непредвиденного</h3>
            <p className="mt-2 text-sm text-muted-foreground">Набор покрытий зависит от программы и условий договора.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {COVERS.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-foreground">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

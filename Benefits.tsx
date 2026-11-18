import { Banknote, Compass, FileText, Handshake, Lock, Users } from "lucide-react";
import { SectionHeading } from "./Brand";

const BENEFITS = [
  { icon: Compass, title: "Индивидуальный подход", text: "Решение под ваши цели, а не готовый шаблон." },
  { icon: Users, title: "Забота о близких", text: "Выплата назначенному выгодоприобретателю." },
  { icon: Lock, title: "Конфиденциальность", text: "Условия договора остаются между вами и компанией." },
  { icon: Banknote, title: "Гибкость", text: "Взнос и срок подбираются под ваш бюджет." },
  { icon: FileText, title: "Прозрачные условия", text: "Объясняю каждый пункт договора простым языком." },
  { icon: Handshake, title: "Сопровождение", text: "Остаюсь на связи на протяжении всего договора." },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-y bg-ink-gradient">
      <div className="container-page">
        <SectionHeading light eyebrow="Почему со мной" title={<>Работа, основанная на <em className="text-gold">доверии</em></>} lead="Более 10 лет помогаю семьям Петропавловска выстраивать финансовую защиту." />
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 bg-ink p-6 md:p-7">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-xl text-ink-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

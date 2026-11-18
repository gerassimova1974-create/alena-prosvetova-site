import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Landmark, Mic, Users } from "lucide-react";
import { PageShell, pageHead } from "@/components/site/PageShell";
import { WhatsAppButton } from "@/components/landing/Brand";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead("Портфолио — истории клиентов Алёны Просветовой", "Примеры финансовых планов для семей Петропавловска: накопления, образование детей, защита близких."),
  component: Portfolio,
});

const CASES = [
  { icon: GraduationCap, tag: "Образование", title: "Семья с двумя детьми, 6 и 10 лет", task: "Подготовить средства на обучение каждого ребёнка к поступлению.", result: "Составили план с двумя сроками накопления под возраст детей и комфортный ежемесячный взнос." },
  { icon: Users, tag: "Защита", title: "Молодая семья, единственный кормилец", task: "Поддержка семьи, если основной доход пропадёт.", result: "Подобрали страховую сумму под расходы семьи и дополнительные покрытия при несчастном случае." },
  { icon: Landmark, tag: "Накопления", title: "Предприниматель, 45 лет", task: "Регулярно откладывать часть дохода на долгосрочные цели.", result: "Выстроили дисциплину накоплений с гибким взносом под сезонность бизнеса." },
  { icon: Mic, tag: "Обучение", title: "Лекции по финансовой грамотности", task: "Объяснить коллективам, как планировать семейный бюджет.", result: "Встречи для сотрудников организаций Петропавловска и СКО." },
];

function Portfolio() {
  return (
    <PageShell eyebrow="Портфолио" title="Истории семей, с которыми я работаю" lead="Имена не указываю — конфиденциальность клиентов для меня важна.">
      <section className="section-y pt-0">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {CASES.map(({ icon: Icon, tag, title, task, result }) => (
            <article key={title} className="rounded-3xl bg-card p-7 shadow-soft md:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground"><Icon className="size-3.5" />{tag}</span>
              <h2 className="mt-4 text-2xl text-foreground md:text-3xl">{title}</h2>
              <p className="mt-4 text-sm font-semibold text-foreground">Задача</p>
              <p className="text-sm text-muted-foreground">{task}</p>
              <p className="mt-3 text-sm font-semibold text-foreground">Что сделали</p>
              <p className="text-sm text-muted-foreground">{result}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10">
          <WhatsAppButton className="w-full sm:w-auto" message="Здравствуйте, Алёна! Хочу обсудить финансовый план для моей семьи.">Обсудить мою ситуацию</WhatsAppButton>
        </div>
      </section>
    </PageShell>
  );
}

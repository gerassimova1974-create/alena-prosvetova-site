import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, MapPin, Mic } from "lucide-react";
import alena from "@/assets/alena_prosvetova.jpg";
import { PageShell, pageHead } from "@/components/site/PageShell";
import { WhatsAppButton } from "@/components/landing/Brand";

export const Route = createFileRoute("/o-sebe")({
  head: () => pageHead("О себе — Алёна Просветова, финансовый консультант", "С 2014 года помогаю семьям Петропавловска и СКО формировать накопления и защищать близких."),
  component: About,
});

const FACTS = [
  { icon: Award, title: "С 2014 года", text: "в сфере накопительного страхования жизни и финансового консультирования" },
  { icon: MapPin, title: "Петропавловск и СКО", text: "встречи лично или онлайн" },
  { icon: Mic, title: "Спикер", text: "провожу встречи и лекции по финансовой грамотности" },
  { icon: HeartHandshake, title: "Сопровождение", text: "остаюсь на связи на всём сроке договора" },
];

function About() {
  return (
    <PageShell eyebrow="О себе" title={<>Алёна Просветова</>} lead="Финансовая грамотность — это забота о близких.">
      <section className="section-y pt-0">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <img src={alena} alt="Алёна Просветова" width={778} height={941} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift" />
          <div>
            <div className="space-y-5 text-base leading-relaxed text-foreground md:text-lg">
              <p>Меня зовут Алёна Просветова. С 2014 года я помогаю семьям выстраивать финансовую защиту: формировать долгосрочные накопления, планировать образование детей и предусматривать поддержку близких на случай непредвиденного.</p>
              <p>Я убеждена: финансовый план — это не про сложные термины, а про спокойствие за своих детей. Поэтому объясняю условия простым языком и подбираю решение под цели и бюджет конкретной семьи, без давления.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FACTS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-3xl bg-card p-6 shadow-soft">
                  <Icon className="size-5 text-primary" />
                  <p className="mt-3 text-2xl text-foreground font-display">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <WhatsAppButton className="mt-10 w-full sm:w-auto" message="Здравствуйте, Алёна! Хочу получить консультацию.">Получить консультацию</WhatsAppButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

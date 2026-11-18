import { GraduationCap, HeartHandshake, Landmark, MapPin } from "lucide-react";
import alena from "@/assets/alena_prosvetova.jpg";
import { CITY } from "@/lib/insurance";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./Brand";

const POINTS = [
  { icon: Landmark, label: "Капитал" },
  { icon: HeartHandshake, label: "Защита близких" },
  { icon: GraduationCap, label: "Образование детей" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-24 md:pt-32">
      <div className="container-page relative grid items-center gap-10 pb-14 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="eyebrow">
            <span className="h-px w-6 bg-primary" />
            Алёна Просветова
          </p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl lg:text-[4.4rem]">
            Создавайте капитал.{" "}
            <em className="block text-primary">Защищайте будущее семьи.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Помогаю формировать долгосрочные накопления, создавать финансовый капитал,
            предусматривать защиту близких и планировать образование детей.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-foreground">
            <li className="flex items-center gap-2">
              <span className="h-px w-5 bg-primary" />С 2014 года в сфере накопительного страхования
              жизни и финансового консультирования
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {CITY} и Северо-Казахстанская область
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Здравствуйте, Алёна! Хочу получить консультацию.">
              Получить консультацию
            </WhatsAppButton>
            <Button asChild variant="outline" size="xl" className="bg-card/70 font-semibold">
              <a href="#programs">Узнать о накопительной программе</a>
            </Button>
          </div>
          <ul className="mt-9 grid grid-cols-3 gap-3 border-t border-border pt-6">
            {POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="text-xs font-semibold leading-tight text-foreground sm:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 -z-0 translate-x-4 translate-y-4 rounded-[2rem] border border-primary/30" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={alena}
              alt="Алёна Просветова — финансовый консультант"
              width={778}
              height={941}
              className="aspect-[4/5] w-full object-cover object-[30%_center]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-20">
              <p className="font-display text-2xl text-ink-foreground">Алёна Просветова</p>
              <p className="text-sm text-ink-muted">Финансовый консультант · с 2014 года</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

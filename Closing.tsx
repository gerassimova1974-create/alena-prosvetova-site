import { MapPin } from "lucide-react";
import alena from "@/assets/alena_prosvetova.jpg";
import { CITY, WHATSAPP_NUMBER } from "@/lib/insurance";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo, SectionHeading, WhatsAppButton, WhatsAppIcon } from "./Brand";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/insurance";

const STEPS = [
  { title: "Пишете в WhatsApp", text: "Отвечаем в течение 15 минут в рабочее время." },
  { title: "Бесплатный расчёт", text: "Подбираем программу под возраст, цель и бюджет." },
  { title: "Встреча или онлайн", text: `В офисе в ${CITY}е или по видеосвязи — как удобно.` },
  { title: "Договор и сопровождение", text: "Помогаю с оформлением и остаюсь на связи." },
];

const FAQ = [
  {
    q: "Чем накопительное страхование лучше депозита?",
    a: "Депозит только хранит деньги. Накопительное страхование жизни сочетает накопления и страховую защиту семьи. Конкретные условия зависят от программы — разберём их на консультации.",
  },
  {
    q: "Что если я не смогу платить взносы?",
    a: "Варианты зависят от условий вашего договора. Я заранее объясню, какие возможности предусмотрены, и помогу выбрать комфортный взнос.",
  },
  {
    q: "Насколько это надёжно?",
    a: "Standard Life работает с 2007 года по лицензии Нацбанка РК, участвует в Фонде гарантирования страховых выплат и перестраховывается в Hannover Re — одном из крупнейших перестраховщиков мира.",
  },
  {
    q: "С какого возраста можно оформить?",
    a: "Программу можно оформить на себя или на ребёнка. Чем раньше вы начинаете, тем комфортнее размер взноса.",
  },
  {
    q: "Можно ли забрать деньги досрочно?",
    a: "Порядок досрочного расторжения и выкупная сумма определяются договором. Перед оформлением подробно разбираем эти условия.",
  },
];

export function Steps() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-page">
        <SectionHeading eyebrow="Как оформить" title="4 простых шага к защите вашей семьи" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-card p-6 shadow-soft">
              <span className="font-display text-4xl font-bold text-gradient-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-sans text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Вопросы"
          title="Отвечаем честно"
          lead="Не нашли ответ? Напишите Алёне — разберём вашу ситуацию лично."
        />
        <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-5 shadow-soft md:px-8">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="last:border-b-0">
              <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="pb-24 md:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-gradient p-7 shadow-lift md:p-14">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-[130%] w-32 -skew-x-12 bg-gold opacity-20 md:w-48"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <img
              src={alena}
              alt="Алёна Просветова"
              width={778}
              height={941}
              loading="lazy"
              className="size-28 rounded-full border-4 border-gold object-cover object-[35%_20%] md:size-40"
            />
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight text-ink-foreground md:text-4xl">
                Финансовая грамотность — это забота о&nbsp;близких
              </h2>
              <p className="mt-4 text-ink-muted md:text-lg">
                Напишите мне в WhatsApp — рассчитаю программу под вашу семью бесплатно и без
                обязательств.
              </p>
              <WhatsAppButton
                className="mt-7 w-full sm:w-auto"
                message={`Здравствуйте, Алёна! Хочу бесплатный расчёт накопительного страхования (${CITY}).`}
              >
                Получить бесплатный расчёт
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const pretty = `+${WHATSAPP_NUMBER.slice(0, 1)} ${WHATSAPP_NUMBER.slice(1, 4)} ${WHATSAPP_NUMBER.slice(4, 7)} ${WHATSAPP_NUMBER.slice(7, 9)} ${WHATSAPP_NUMBER.slice(9)}`;
  return (
    <footer className="bg-ink pb-28 pt-12 text-ink-foreground md:pb-12">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Финансовая защита семьи. {CITY} и Северо-Казахстанская область.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2.5 text-ink-muted">
            <MapPin className="size-4 text-primary" /> г. {CITY}, Северо-Казахстанская обл.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 pb-1">
            {[["/o-sebe","О себе"],["/portfolio","Портфолио"],["/kontakty","Контакты"],["/zapis","Запись"]].map(([h,l]) => (
              <a key={h} href={h} className="hover:text-gold">{l}</a>
            ))}
          </nav>
          <a href={whatsappLink(DEFAULT_WA_MESSAGE)} className="flex items-center gap-2.5 hover:text-primary">
            <WhatsAppIcon className="size-4 text-gold" /> {pretty}
          </a>
        </div>
        <p className="text-xs leading-relaxed text-ink-muted md:text-right">
          Страховые услуги оказывает АО «Компания по страхованию жизни «Standard Life», лицензия №
          44-1/1 от 09.11.2007. Расчёты на сайте носят информационный характер.
          <br />© {new Date().getFullYear()} Алёна Просветова
        </p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <WhatsAppButton className="w-full">Написать в WhatsApp</WhatsAppButton>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-40 hidden size-16 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-105 md:grid"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}

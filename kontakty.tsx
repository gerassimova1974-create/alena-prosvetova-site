import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, MapPin } from "lucide-react";
import { PageShell, pageHead } from "@/components/site/PageShell";
import { WhatsAppButton, WhatsAppIcon } from "@/components/landing/Brand";
import { ShareSiteButton } from "@/components/site/ShareButton";
import { Button } from "@/components/ui/button";
import { CITY } from "@/lib/insurance";

export const Route = createFileRoute("/kontakty")({
  head: () => pageHead("Контакты — Алёна Просветова", "WhatsApp +7 707 476 56 35. Консультации в Петропавловске, по Северо-Казахстанской области и онлайн."),
  component: Contacts,
});

function Contacts() {
  return (
    <PageShell eyebrow="Контакты" title="Свяжитесь со мной" lead="Удобнее всего написать в WhatsApp — отвечу и договоримся о встрече.">
      <section className="section-y pt-0">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-ink-gradient p-7 text-ink-foreground shadow-lift">
            <WhatsAppIcon className="size-6 text-gold" />
            <p className="mt-4 text-sm text-ink-muted">WhatsApp</p>
            <a href="https://wa.me/77074765635" className="font-display text-3xl">+7 707 476 56 35</a>
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-soft">
            <MapPin className="size-6 text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">Где встречаемся</p>
            <p className="font-display text-2xl text-foreground">{CITY} и СКО</p>
            <p className="mt-1 text-sm text-muted-foreground">Лично или онлайн по видеосвязи</p>
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-soft">
            <CalendarCheck className="size-6 text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">Запись</p>
            <p className="font-display text-2xl text-foreground">Онлайн-форма</p>
            <Button asChild variant="link" className="mt-1 h-auto p-0"><a href="/zapis">Записаться на консультацию →</a></Button>
          </div>
        </div>
        <div className="container-page mt-10 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message="Здравствуйте, Алёна! Хочу получить консультацию.">Написать в WhatsApp</WhatsAppButton>
          <ShareSiteButton />
        </div>
      </section>
    </PageShell>
  );
}

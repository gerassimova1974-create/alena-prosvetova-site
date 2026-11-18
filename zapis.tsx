import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Closing";
import { WhatsAppIcon } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GOALS, TIMES, bookingMessage, bookingSchema } from "@/lib/booking";
import { whatsappLink } from "@/lib/insurance";

const TITLE = "Запись на консультацию — Алёна Просветова";
const DESC = "Запишитесь на бесплатную консультацию по накоплениям, образованию детей и защите семьи. Петропавловск и СКО.";

export const Route = createFileRoute("/zapis")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Booking,
});

type Errors = Partial<Record<"name" | "phone" | "goal" | "time", string>>;

function Chips({ options, value, onChange, name }: { options: readonly string[]; value: string; onChange: (v: string) => void; name: string }) {
  return (
    <div role="radiogroup" aria-label={name} className="mt-2 flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          onClick={() => onChange(o)}
          className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${value === o ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", goal: "", time: "" });
  const [errors, setErrors] = useState<Errors>({});
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = bookingSchema.safeParse(form);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    window.open(whatsappLink(bookingMessage(r.data)), "_blank", "noopener,noreferrer");
  }

  const err = (k: keyof Errors) => errors[k] && <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p>;

  return (
    <>
      <Header />
      <main className="bg-hero pb-20 pt-28 md:pt-36">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow"><span className="h-px w-6 bg-primary" />Бесплатно и без обязательств</p>
            <h1 className="mt-4 text-[2.4rem] leading-[1.05] text-foreground md:text-6xl">Запись на консультацию</h1>
            <p className="mt-5 max-w-md text-muted-foreground md:text-lg">
              Заполните форму — заявка откроется в WhatsApp, останется только нажать «Отправить». Алёна свяжется с вами в удобное время.
            </p>
          </div>
          <form onSubmit={submit} noValidate className="rounded-3xl bg-card p-6 shadow-soft md:p-9">
            <label htmlFor="name" className="text-sm font-semibold text-foreground">Имя</label>
            <Input id="name" value={form.name} onChange={(e) => set("name")(e.target.value)} maxLength={80} autoComplete="name" className="mt-2 h-12 rounded-xl" placeholder="Как к вам обращаться" />
            {err("name")}
            <label htmlFor="phone" className="mt-5 block text-sm font-semibold text-foreground">Телефон</label>
            <Input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} maxLength={18} autoComplete="tel" className="mt-2 h-12 rounded-xl" placeholder="+7 707 123 45 67" />
            {err("phone")}
            <p className="mt-5 text-sm font-semibold text-foreground">Цель</p>
            <Chips name="Цель" options={GOALS} value={form.goal} onChange={set("goal")} />
            {err("goal")}
            <p className="mt-5 text-sm font-semibold text-foreground">Удобное время</p>
            <Chips name="Удобное время" options={TIMES} value={form.time} onChange={set("time")} />
            {err("time")}
            <Button type="submit" variant="whatsapp" size="xl" className="mt-8 w-full">
              <WhatsAppIcon /> Отправить заявку в WhatsApp
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

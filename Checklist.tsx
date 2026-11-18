import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { createChecklist } from "@/lib/checklist.functions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading, WhatsAppButton } from "./Brand";

export function Checklist() {
  const run = useServerFn(createChecklist);
  const [goals, setGoals] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const tooShort = goals.trim().length < 20;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (tooShort || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await run({ data: { goals } });
      setItems(res.items);
      setError(res.error);
    } catch {
      setError("Не удалось составить чек-лист. Попробуйте ещё раз позже.");
    } finally {
      setLoading(false);
    }
  }

  const message = `Здравствуйте, Алёна! Подготовил(а) чек-лист к консультации.\nМои цели: ${goals}\n\n${items.map((i) => `• ${i}`).join("\n")}`;

  return (
    <section id="checklist" className="section-y bg-secondary/60">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Подготовка к встрече"
          title="Персональный чек-лист к консультации"
          lead="Опишите цели вашей семьи — AI составит список вопросов и данных, которые стоит подготовить к встрече с Алёной."
        />
        <div className="rounded-3xl bg-card p-6 shadow-soft md:p-8">
          <form onSubmit={submit}>
            <label htmlFor="goals" className="text-sm font-semibold text-foreground">
              Ваши цели
            </label>
            <Textarea
              id="goals"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              maxLength={2000}
              rows={5}
              placeholder="Например: двое детей 5 и 9 лет, хотим накопить на их обучение и чтобы семья была защищена, если со мной что-то случится. Можем откладывать около 50 000 ₸ в месяц."
              className="mt-2 rounded-2xl bg-background"
            />
            <Button type="submit" variant="ink" size="xl" className="mt-4 w-full sm:w-auto" disabled={tooShort || loading}>
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {loading ? "Составляем чек-лист…" : "Составить чек-лист"}
            </Button>
            {tooShort && goals.length > 0 && (
              <p className="mt-2 text-xs text-muted-foreground">Опишите чуть подробнее (от 20 символов).</p>
            )}
          </form>
          {error && <p className="mt-5 rounded-2xl bg-accent p-4 text-sm text-accent-foreground">{error}</p>}
          {items.length > 0 && (
            <div className="mt-6 border-t border-border pt-6">
              <h3 className="text-2xl text-foreground">Ваш чек-лист</h3>
              <ul className="mt-4 space-y-3">
                {items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
              <WhatsAppButton className="mt-6 w-full sm:w-auto" message={message}>
                Отправить Алёне в WhatsApp
              </WhatsAppButton>
              <p className="mt-3 text-xs text-muted-foreground">Чек-лист носит информационный характер и не является финансовой рекомендацией.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

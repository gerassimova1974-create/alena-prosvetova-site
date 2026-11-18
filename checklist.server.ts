import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

const SYSTEM = `Ты помощник финансового консультанта Алёны Просветовой (финансовая защита семьи, Петропавловск и СКО).
По описанию целей семьи составь персональный чек-лист подготовки к консультации на русском языке.
Правила: только список из 6–10 пунктов, каждый с новой строки и начинается с "- ". Каждый пункт — конкретный вопрос или документ/цифра, которые стоит подготовить.
Запрещено: упоминать пенсию или аннуитет, обещать доходность, проценты, гарантии или конкретные суммы выплат, давать инвестиционные рекомендации. Никакого вступления и заключения.`;

export async function generateChecklist(goals: string): Promise<string[]> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI не настроен");
  let runId: string | undefined;
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: async (input, init) => {
      const headers = new Headers(init?.headers);
      if (runId) headers.set(RUN_ID_HEADER, runId);
      const res = await fetch(input, { ...init, headers });
      runId ??= res.headers.get(RUN_ID_HEADER)?.trim() || undefined;
      return res;
    },
  });
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    maxRetries: 0,
    onError: ({ error }) => console.error("AI stream error", error),
    instructions: SYSTEM,
    messages: [{ role: "user", content: goals }],
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  const text = await result.text;
  return parseChecklist(text);
}

export function parseChecklist(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "").trim())
    .filter((l) => l.length > 3)
    .slice(0, 12);
}

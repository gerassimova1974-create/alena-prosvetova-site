import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({ goals: z.string().trim().min(20).max(2000) });

export const createChecklist = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const { generateChecklist } = await import("./checklist.server");
    try {
      const items = await generateChecklist(data.goals);
      if (items.length === 0) return { items, error: "Не удалось составить чек-лист. Попробуйте описать цели подробнее." };
      return { items, error: null as string | null };
    } catch (e: unknown) {
      const status = (e as { statusCode?: number })?.statusCode;
      console.error("checklist failed", status, e);
      const error =
        status === 429
          ? "Сервис сейчас перегружен. Попробуйте через минуту."
          : status === 402
            ? "Сервис временно недоступен. Напишите Алёне в WhatsApp."
            : "Не удалось составить чек-лист. Напишите Алёне в WhatsApp.";
      return { items: [] as string[], error };
    }
  });

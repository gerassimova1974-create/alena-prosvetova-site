import { z } from "zod";

export const GOALS = ["Накопления", "Образование", "Защита"] as const;
export const TIMES = ["Утро (9:00–12:00)", "День (12:00–17:00)", "Вечер (17:00–20:00)"] as const;

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Слишком длинное имя"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{10,18}$/, "Укажите телефон, например +7 707 123 45 67"),
  goal: z.enum(GOALS, { message: "Выберите цель" }),
  time: z.enum(TIMES, { message: "Выберите удобное время" }),
});

export type Booking = z.infer<typeof bookingSchema>;

export function bookingMessage(b: Booking): string {
  return [
    "Здравствуйте, Алёна! Хочу записаться на консультацию.",
    `Имя: ${b.name}`,
    `Телефон: ${b.phone}`,
    `Цель: ${b.goal}`,
    `Удобное время: ${b.time}`,
  ].join("\n");
}

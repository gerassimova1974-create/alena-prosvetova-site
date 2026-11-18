import { describe, expect, it } from "vitest";
import { bookingMessage, bookingSchema } from "./booking";

describe("booking", () => {
  it("accepts a valid request", () => {
    expect(bookingSchema.safeParse({ name: "Айгуль", phone: "+7 707 123 45 67", goal: "Защита", time: "Вечер (17:00–20:00)" }).success).toBe(true);
  });
  it("rejects a short phone", () => {
    expect(bookingSchema.safeParse({ name: "Айгуль", phone: "123", goal: "Защита", time: "Вечер (17:00–20:00)" }).success).toBe(false);
  });
  it("puts all fields in the WhatsApp message", () => {
    const m = bookingMessage({ name: "Айгуль", phone: "+77071234567", goal: "Образование", time: "Утро (9:00–12:00)" });
    expect(m).toContain("Имя: Айгуль");
    expect(m).toContain("Цель: Образование");
    expect(m).toContain("Удобное время: Утро (9:00–12:00)");
  });
});

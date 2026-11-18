import { describe, expect, it } from "vitest";
import { parseChecklist } from "./checklist.server";

describe("parseChecklist", () => {
  it("strips bullets and numbers and drops empty lines", () => {
    expect(parseChecklist("- Возраст детей\n\n2) Ежемесячный бюджет\n• Цели")).toEqual([
      "Возраст детей",
      "Ежемесячный бюджет",
      "Цели",
    ]);
  });
});

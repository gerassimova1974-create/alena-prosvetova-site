import { describe, expect, it } from "vitest";
import {
  formatTenge,
  WHATSAPP_NUMBER,
  shareSiteMessage,
  whatsappLink,
  yearlyFromDaily,
} from "./insurance";

describe("contact", () => {
  it("uses WhatsApp +7 707 476 56 35", () => {
    expect(WHATSAPP_NUMBER).toBe("77074765635");
  });
});

describe("daily spending", () => {
  it("1 000 ₸ a day is 365 000 ₸ a year", () => {
    expect(yearlyFromDaily(1000)).toBe(365000);
  });
  it("5 000 ₸ a day is 1 825 000 ₸ a year", () => {
    expect(yearlyFromDaily(5000)).toBe(1825000);
  });
});

describe("helpers", () => {
  it("formats tenge with spaces", () => {
    expect(formatTenge(22500000)).toBe("22 500 000 ₸");
  });
  it("builds a WhatsApp link with the encoded message", () => {
    expect(whatsappLink("Привет мир", "77001112233")).toBe(
      "https://wa.me/77001112233?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80",
    );
  });
});

describe("share message", () => {
  it("links to about, portfolio and contacts pages", () => {
    const m = shareSiteMessage("https://site.kz/");
    expect(m).toContain("https://site.kz/o-sebe");
    expect(m).toContain("https://site.kz/portfolio");
    expect(m).toContain("https://site.kz/kontakty");
  });
});

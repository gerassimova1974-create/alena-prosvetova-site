// Business data for the Alena Prosvetova family financial protection landing page.

/** WhatsApp number in international format, digits only. */
export const WHATSAPP_NUMBER = "77074765635";

export const CITY = "Петропавловск";

/** How much a daily habit costs over a year. */
export function yearlyFromDaily(daily: number): number {
  return Math.max(0, Math.round(daily)) * 365;
}

export function formatTenge(value: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(value).replace(/\u00a0/g, " ")} ₸`;
}

export function whatsappLink(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE = `Здравствуйте! Хочу получить консультацию по накопительной программе (${CITY}).`;

export const SITE_PAGES = [
  { path: "/o-sebe", label: "О себе" },
  { path: "/portfolio", label: "Портфолио" },
  { path: "/kontakty", label: "Контакты" },
  { path: "/zapis", label: "Запись на консультацию" },
] as const;

/** Text for sharing the site in WhatsApp chats or broadcasts, with links to the key pages. */
export function shareSiteMessage(origin: string): string {
  const base = origin.replace(/\/+$/, "");
  return [
    "Алёна Просветова — финансовая защита семьи. Петропавловск и СКО.",
    `Сайт: ${base}/`,
    ...SITE_PAGES.map((p) => `${p.label}: ${base}${p.path}`),
  ].join("\n");
}

export function whatsappShareLink(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

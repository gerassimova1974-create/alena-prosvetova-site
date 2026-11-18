import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, WhatsAppButton } from "./Brand";

const NAV = [
  { href: "/o-sebe", label: "О себе" },
  { href: "/#services", label: "Услуги" },
  { href: "/#programs", label: "Программы" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/kontakty", label: "Контакты" },
  { href: "/zapis", label: "Запись" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="/" aria-label="На главную">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton size="lg" className="rounded-full">
            Консультация
          </WhatsAppButton>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full bg-card text-foreground shadow-soft lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="container-page pb-6 lg:hidden">
          <nav className="flex flex-col divide-y divide-border rounded-2xl bg-card p-2 shadow-soft">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-base font-semibold text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton className="mt-4 w-full">Написать в WhatsApp</WhatsAppButton>
        </div>
      )}
    </header>
  );
}

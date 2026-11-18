import { DEFAULT_WA_MESSAGE, whatsappLink } from "@/lib/insurance";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-display text-xl font-semibold ${light ? "text-ink-foreground" : "text-foreground"}`}>
        Алёна Просветова
      </span>
      <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-ink-muted" : "text-primary"}`}>
        финансовая защита семьи
      </span>
    </span>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.47A11.28 11.28 0 0 0 12.05.7C5.8.7.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.1 11.36-11.35 0-3.03-1.18-5.88-3.33-8.02" />
    </svg>
  );
}

export function WhatsAppButton({
  message = DEFAULT_WA_MESSAGE,
  children = "Написать в WhatsApp",
  variant = "whatsapp",
  size = "xl",
  className,
}: {
  message?: string;
  children?: ReactNode;
  variant?: "whatsapp" | "hero" | "ink" | "ghostLight";
  size?: "xl" | "lg" | "default";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {children}
      </a>
    </Button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">
        <span className="h-px w-6 bg-primary" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-[1.9rem] leading-[1.15] md:text-[3rem] ${light ? "text-ink-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-ink-muted" : "text-muted-foreground"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

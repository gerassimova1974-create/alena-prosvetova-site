import type { ReactNode } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Closing";

export function PageShell({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead?: ReactNode; children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero pb-12 pt-28 md:pb-16 md:pt-36">
          <div className="container-page">
            <p className="eyebrow"><span className="h-px w-6 bg-primary" />{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-[2.4rem] leading-[1.05] text-foreground md:text-6xl">{title}</h1>
            {lead && <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">{lead}</p>}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

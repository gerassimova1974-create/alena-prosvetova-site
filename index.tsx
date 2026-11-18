import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Benefits } from "@/components/landing/Benefits";
import { Programs } from "@/components/landing/Programs";
import { Trust } from "@/components/landing/Trust";
import { Checklist } from "@/components/landing/Checklist";
import { Reviews } from "@/components/landing/Reviews";
import {
  Faq,
  FinalCta,
  FloatingWhatsApp,
  Footer,
  MobileBar,
  Steps,
} from "@/components/landing/Closing";

const TITLE = "Алёна Просветова — финансовая защита семьи, Петропавловск";
const DESCRIPTION =
  "Создавайте капитал и защищайте будущее семьи: долгосрочные накопления, защита близких, образование детей. Петропавловск и СКО.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Programs />
        <Trust />
        <Checklist />
        <Reviews />
        <Steps />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </>
  );
}

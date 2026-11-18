import { useEffect, useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shareSiteMessage, whatsappShareLink } from "@/lib/insurance";

export function ShareSiteButton({ variant = "outline" as "outline" | "ghostLight", className = "" }) {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  return (
    <Button asChild variant={variant} size="xl" className={`font-semibold ${className}`}>
      <a href={origin ? whatsappShareLink(shareSiteMessage(origin)) : "#"} target="_blank" rel="noopener noreferrer">
        <Share2 /> Поделиться сайтом в WhatsApp
      </a>
    </Button>
  );
}

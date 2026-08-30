import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { WHATSAPP_URL as FALLBACK_URL } from "@/lib/site-config";

/** Reads the live WhatsApp link from Firestore, updating instantly if it changes. */
export function useWhatsAppUrl(): string {
  const [url, setUrl] = useState(FALLBACK_URL);

  useEffect(() => {
    const ref = doc(getFirebaseDb(), "site-config", "main");
    type SiteConfig = { whatsappUrl?: string };
    const unsubscribe = onSnapshot(ref, (snap) => {
      const data = snap.data() as SiteConfig | undefined;
      const liveUrl = data?.whatsappUrl;
      if (liveUrl) setUrl(liveUrl);
    });
    return () => unsubscribe();
  }, []);

  return url;
}

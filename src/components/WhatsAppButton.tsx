import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/447984147403?text=Hi%20Neil%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20some%20flooring%20work.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1eb85a] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}

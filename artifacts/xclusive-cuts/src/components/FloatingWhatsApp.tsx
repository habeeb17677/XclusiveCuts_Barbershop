import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}

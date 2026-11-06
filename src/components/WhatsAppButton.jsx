import { site } from "../data/content";

const message = "Hello Arthass! I'm interested in your Digital Marketing Services and Web Development Service. Please share the details.";

export default function WhatsAppButton() {
  const phone = site.contact.phone.replace(/\D/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Arthass on WhatsApp"
    >
      <img src="/whatsapp.png" alt="" />
    </a>
  );
}

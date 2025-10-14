import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5535988596255", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
  );
};

export default WhatsAppButton;

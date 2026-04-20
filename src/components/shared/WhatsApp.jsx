import React from "react";

const WHATSAPP_PHONE = "923001234567";
const WHATSAPP_MESSAGE = "Hi, I would like to get a quote for construction work.";

function WhatsApp() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-24 md:right-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.751 13.71c-.252-.126-1.492-.735-1.722-.819-.23-.084-.398-.126-.566.126-.168.252-.651.819-.798.987-.147.168-.294.189-.546.063-.252-.126-1.063-.392-2.025-1.25-.749-.667-1.254-1.49-1.401-1.742-.147-.252-.015-.388.111-.514.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.566-1.365-.777-1.868-.204-.491-.41-.424-.566-.432-.147-.007-.315-.009-.483-.009-.168 0-.441.063-.672.315-.23.252-.882.861-.882 2.099s.903 2.436 1.029 2.604c.126.168 1.777 2.713 4.307 3.804.602.26 1.072.415 1.438.531.604.192 1.154.165 1.589.1.485-.072 1.492-.609 1.702-1.196.21-.588.21-1.092.147-1.196-.062-.104-.231-.167-.483-.294Z" />
        <path d="M12.004 2.003c-5.514 0-9.983 4.469-9.983 9.983 0 1.761.46 3.487 1.334 5.009L2 22l5.159-1.325a9.936 9.936 0 0 0 4.845 1.25h.004c5.513 0 9.992-4.469 9.992-9.983 0-2.673-1.041-5.186-2.933-7.077a9.914 9.914 0 0 0-7.063-2.862Zm.004 18.246h-.003a8.268 8.268 0 0 1-4.211-1.153l-.302-.179-3.063.787.818-2.989-.197-.307a8.271 8.271 0 0 1-1.274-4.402c0-4.57 3.717-8.286 8.287-8.286 2.215 0 4.298.862 5.865 2.429a8.234 8.234 0 0 1 2.431 5.857c0 4.57-3.721 8.243-8.351 8.243Z" />
      </svg>
    </a>
  );
}

export default WhatsApp;

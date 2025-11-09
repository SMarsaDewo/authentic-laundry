export default function WhatsAppButton() {
  const phoneNumber = "6285974733004";

  const message = encodeURIComponent(
    "Halo Authentic Laundry! Saya ingin bertanya tentang layanan laundry 😊"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EBE5A] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.85 11.85 0 0012.06 0C5.46 0 .06 5.4.06 12a11.86 11.86 0 001.64 6L0 24l6.18-1.62a12.04 12.04 0 005.88 1.5h.01c6.6 0 12-5.4 12-12 0-3.18-1.24-6.17-3.54-8.4zM12.06 22a10.1 10.1 0 01-5.16-1.44l-.37-.22-3.66.96.98-3.56-.24-.37a9.9 9.9 0 01-1.5-5.32c0-5.52 4.5-10 10.04-10 2.68 0 5.2 1.04 7.1 2.94a9.96 9.96 0 012.94 7.1c0 5.52-4.48 10-10.12 10zm5.5-7.57c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78.9-.96 1.1-.17.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.52-1.77-1.7-2.07-.18-.3-.02-.47.13-.62.13-.12.3-.32.45-.48.15-.16.2-.27.3-.45.1-.18.05-.33-.02-.48-.08-.15-.68-1.64-.93-2.25-.24-.58-.5-.5-.68-.5h-.58c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.63 1.12 2.8c.15.18 1.92 2.93 4.65 4.12.65.28 1.15.45 1.54.57.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.16.15-1.28-.07-.12-.26-.18-.56-.33z" />
      </svg>
    </a>
  );
}

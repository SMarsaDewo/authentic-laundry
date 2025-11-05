import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/90 shadow-md"
          : "bg-white/60 backdrop-blur-sm border-b border-white/40"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/logo.png"
            alt="Authentic Laundry Logo"
            className="h-10 w-10 rounded-md shadow-sm"
          />
          <h1 className="font-serifDisplay text-2xl md:text-3xl text-charcoal tracking-tight">
            Authentic <span className="text-softGold">Laundry</span>
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 font-poppins text-[15px] text-charcoal">
          {["Tentang", "Layanan", "Pesan"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-softGold after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:text-softGold"
            >
              {item}
            </a>
          ))}

          {/* CTA PESAN SEKARANG */}
          <a
            href="#order"
            className="bg-softGold text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-charcoal hover:text-softGold transition-all duration-300"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-charcoal focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md text-center py-4 space-y-3 font-poppins text-charcoal">
          {["Tentang", "Layanan", "Pesan"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block hover:text-softGold transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setIsOpen(false)}
            className="inline-block bg-softGold text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-charcoal hover:text-softGold transition-all duration-300"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}

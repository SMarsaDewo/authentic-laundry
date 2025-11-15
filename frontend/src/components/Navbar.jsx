import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate(isAdmin ? "/dashboard-admin" : "/")}
        >
          <img
            src="/src/assets/logo.png"
            alt="Authentic Laundry Logo"
            className="h-10 w-10 rounded-md shadow-sm"
          />
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

          {/* ICON KERANJANG */}
          <button
            onClick={() => navigate("/summary")}
            className="relative text-charcoal hover:text-softGold transition"
            aria-label="Lihat Keranjang"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-softGold text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
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

          {/* Tombol Keranjang di Mobile */}
          <button
            onClick={() => {
              navigate("/summary");
              setIsOpen(false);
            }}
            className="inline-block bg-softGold text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-charcoal hover:text-softGold transition-all duration-300"
          >
            Keranjang ({cartItems.length})
          </button>
        </div>
      )}
    </nav>
  );
}

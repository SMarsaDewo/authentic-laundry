export default function Footer() {
  return (
    <footer className="bg-charcoal text-pureWhite text-center py-8 relative">
      {/* gradient top border biar nyatu sama section sebelumnya */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lightTeal to-softGold"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-softGold text-lg">🧺</span>
          <h3 className="font-serifDisplay text-lg font-semibold tracking-wide">
            Authentic Laundry
          </h3>
        </div>

        <p className="text-sm font-poppins text-pureWhite/80">
          Bersih • Cepat • Terpercaya — Hadir untuk Anda
        </p>

        <div className="flex gap-4 text-pureWhite/70 mt-2">
          <a
            href="#"
            className="hover:text-softGold transition-colors duration-300"
          >
            Instagram
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-softGold transition-colors duration-300"
          >
            WhatsApp
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-softGold transition-colors duration-300"
          >
            Lokasi
          </a>
        </div>

        <p className="text-xs text-pureWhite/60 mt-4">
          © {new Date().getFullYear()} Authentic Laundry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

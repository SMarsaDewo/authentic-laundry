export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center min-h-[100vh] px-6 overflow-hidden 
      bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay gradient supaya teks terbaca */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 backdrop-blur-[1px]"></div>

      {/* Konten utama */}
      <div className="relative z-10 max-w-3xl text-white drop-shadow-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serifDisplay font-bold tracking-tight">
          <span className="bg-gradient-to-r from-lightTeal to-softGold bg-clip-text text-transparent drop-shadow-md">
            Authentic Laundry
          </span>
        </h1>

        <p className="mt-5 text-lg md:text-xl font-poppins leading-relaxed text-white/90">
          #BudayakanMencucidiLaundry <br className="hidden md:block" />
          <span className="font-semibold text-lightTeal bg-white/20 px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
            Bersih, Cepat, dan Terpercaya
          </span>
        </p>

        <a
          href="#order"
          className="mt-10 inline-block bg-softGold text-charcoal font-semibold px-10 py-3 rounded-full shadow-lg 
          hover:bg-charcoal hover:text-softGold transition-all duration-300 hover:scale-105"
        >
          Pesan Sekarang
        </a>
      </div>

      {/* Efek dekorasi lembut di background */}
      <div className="absolute w-72 h-72 bg-lightTeal/30 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-64 h-64 bg-softGold/20 rounded-full blur-3xl bottom-20 right-10"></div>
    </section>
  );
}

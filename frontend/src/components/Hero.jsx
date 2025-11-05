export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center min-h-[100vh] px-6 overflow-hidden 
      bg-gradient-to-br from-lightTeal via-[#BFE6DB] to-softGold"
    >
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-10"></div>
      <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl top-[-100px] left-[-80px]"></div>
      <div className="absolute w-80 h-80 bg-lightTeal/20 rounded-full blur-3xl bottom-[-60px] right-[-50px]"></div>
      <div className="absolute w-60 h-60 bg-softGold/20 rounded-full blur-2xl bottom-20 left-1/3 animate-pulse"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serifDisplay text-charcoal drop-shadow-md">
          Authentic Laundry
        </h1>
        <p className="mt-4 text-lg md:text-xl text-charcoal/80 font-poppins leading-relaxed">
          #BudayakanMencucidiLaundry — <br className="hidden md:block" />
          <span className="text-softGold font-semibold">
            Bersih, Cepat, dan Terpercaya
          </span>
        </p>

        <a
          href="#order"
          className="mt-10 inline-block bg-softGold text-white font-semibold px-10 py-3 rounded-full shadow-lg 
          hover:bg-charcoal hover:text-softGold transition-all duration-300 hover:scale-105"
        >
          Pesan Sekarang
        </a>
      </div>

      {/* Floating bubbles */}
      <div className="absolute w-5 h-5 bg-white/40 rounded-full top-[30%] left-[20%] animate-bounce"></div>
      <div className="absolute w-7 h-7 bg-white/30 rounded-full top-[60%] right-[25%] animate-pulse"></div>
      <div className="absolute w-4 h-4 bg-softGold/40 rounded-full bottom-[25%] left-[40%] animate-bounce"></div>
    </section>
  );
}

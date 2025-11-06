export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center min-h-[100vh] px-6 overflow-hidden 
      bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="relative z-10 max-w-3xl text-white drop-shadow-lg">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serifDisplay">
          Authentic Laundry
        </h1>
        <p className="mt-4 text-lg md:text-xl font-poppins leading-relaxed">
          #BudayakanMencucidiLaundry — <br className="hidden md:block" />
          <span className="font-semibold text-sky-400 bg-sky-100 px-2 rounded-md">
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
    </section>
  );
}

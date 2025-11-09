const services = [
  {
    id: 1,
    name: "Cuci Kiloan",
    desc: "Cepat dan hemat untuk pakaian harian Anda. Proses higienis dan hasil wangi segar.",
    price: "Rp7.000 / kg",
    color: "from-[#D7F5EF] to-[#A8E6D0]",
    icon: "🧺",
  },
  {
    id: 2,
    name: "Cuci Setrika",
    desc: "Pakaian bersih, wangi, dan siap pakai. Dikerjakan dengan teliti oleh staf berpengalaman.",
    price: "Rp10.000 / kg",
    color: "from-[#FBE8A6] to-[#E9C46A]",
    icon: "👕",
  },
  {
    id: 3,
    name: "Dry Cleaning",
    desc: "Perawatan khusus untuk pakaian berbahan sensitif dengan peralatan profesional.",
    price: "Mulai Rp25.000 / pcs",
    color: "from-[#C4D7E0] to-[#809BCE]",
    icon: "🧤",
  },
  {
    id: 4,
    name: "Pelatihan Manajemen Laundry",
    desc: "Program eksklusif bagi Anda yang ingin mempelajari manajemen bisnis laundry modern.",
    price: "Kelas dimulai dari Rp500.000",
    color: "from-[#CDE4E3] to-[#9ED6CB]",
    icon: "📘",
  },
  {
    id: 5,
    name: "Pelatihan Pegawai Laundry",
    desc: "Latih pegawai Anda agar profesional, cepat, dan menjaga kualitas hasil cucian pelanggan.",
    price: "Mulai Rp300.000 / orang",
    color: "from-[#FBE8A6] to-[#E6C767]",
    icon: "👩‍🏫",
  },
  {
    id: 6,
    name: "Kemitraan & Franchise",
    desc: "Buka peluang bisnis laundry Anda sendiri dengan dukungan penuh dari Authentic Laundry.",
    price: "Hubungi Kami untuk Info Lengkap",
    color: "from-[#B6CBEF] to-[#A8E6D0]",
    icon: "🤝",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-8 bg-gradient-to-br from-offWhite via-white to-[#F9FAFB] relative overflow-hidden"
    >
      {/* dekorasi background */}
      <div className="absolute w-80 h-80 bg-lightTeal/30 blur-3xl rounded-full top-10 left-16 opacity-40"></div>
      <div className="absolute w-80 h-80 bg-softGold/30 blur-3xl rounded-full bottom-10 right-16 opacity-40"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-serifDisplay text-center text-charcoal mb-4 tracking-wide">
          Layanan Kami
        </h2>
        <p className="text-center text-gray-600 font-poppins mb-16 max-w-2xl mx-auto">
          Authentic Laundry tidak hanya melayani kebutuhan cuci harian, tetapi
          juga membantu Anda mengembangkan bisnis laundry profesional melalui
          pelatihan dan kemitraan.
        </p>

        {/* grid card */}
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {services.map((s) => (
            <div
              key={s.id}
              className={`group rounded-3xl p-8 shadow-lg bg-gradient-to-br ${s.color} 
              text-charcoal text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
              backdrop-blur-sm border border-white/40`}
            >
              <div className="text-6xl mb-5 drop-shadow-md transition-transform duration-300 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-2xl font-serifDisplay mb-3">{s.name}</h3>
              <p className="text-gray-700 mb-4 font-poppins leading-relaxed text-sm">
                {s.desc}
              </p>
              <p className="text-gray-900 font-semibold mb-6">{s.price}</p>
              <a
                href="#order"
                className="inline-block bg-charcoal text-white px-6 py-2 rounded-full 
                font-poppins font-medium hover:bg-softGold hover:text-charcoal transition-all duration-300"
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

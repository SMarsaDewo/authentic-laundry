const services = [
  {
    id: 1,
    name: "Cuci Kiloan",
    desc: "Cepat dan hemat untuk pakaian harian.",
    price: "Rp7.000 / kg",
    color: "from-lightTeal to-[#8ECED6]",
  },
  {
    id: 2,
    name: "Cuci Setrika",
    desc: "Pakaian bersih, wangi, dan siap pakai.",
    price: "Rp10.000 / kg",
    color: "from-softGold to-[#E4C85C]",
  },
  {
    id: 3,
    name: "Dry Cleaning",
    desc: "Perawatan khusus pakaian sensitif.",
    price: "Mulai Rp25.000 / pcs",
    color: "from-charcoal to-[#4B5A64]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 bg-offWhite">
      <h2 className="text-3xl font-serifDisplay text-center text-charcoal mb-10">
        Layanan Kami
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.id}
            className={`rounded-2xl p-8 shadow-md bg-gradient-to-br ${s.color} text-pureWhite text-center hover:scale-105 transition-transform duration-300`}
          >
            <h3 className="text-2xl font-serifDisplay mb-2">{s.name}</h3>
            <p className="text-pureWhite/90 mb-3 font-poppins">{s.desc}</p>
            <p className="text-pureWhite font-semibold mb-5">{s.price}</p>
            <a
              href="#order"
              className="bg-pureWhite text-charcoal px-5 py-2 rounded-full font-poppins font-semibold hover:bg-offWhite transition"
            >
              Pesan Sekarang
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

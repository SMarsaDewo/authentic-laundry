export default function About() {
  const reasons = [
    { icon: "🧺", text: "Bersih & Wangi" },
    { icon: "⚡", text: "Cepat & Efisien" },
    { icon: "🌿", text: "Ramah Lingkungan" },
    { icon: "🚚", text: "Antar-Jemput Gratis" },
  ];

  return (
    <section id="about" className="bg-pureWhite py-20 px-6 text-center">
      <h2 className="text-3xl font-serifDisplay text-charcoal mb-6">
        Mengapa Memilih Kami?
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 font-poppins leading-relaxed mb-12">
        Authentic Laundry hadir untuk memberikan layanan laundry yang cepat,
        bersih, dan profesional. Dengan teknologi modern, bahan ramah
        lingkungan, dan pelayanan hangat — kami pastikan pakaian Anda terawat
        sempurna.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-offWhite p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <p className="font-semibold text-charcoal">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Aulia Rahma",
      text: "Laundry-nya bersih banget! Hasil setrikanya rapi dan wangi. Pengantarannya juga tepat waktu!",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      id: 2,
      name: "Rizky Pratama",
      text: "Suka banget sama Authentic Laundry. Pelayanannya cepat, ramah, dan hasil cucinya seperti baru lagi!",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      name: "Maya Putri",
      text: "Tempat laundry paling nyaman! Harganya terjangkau tapi kualitasnya mewah. Recommended banget!",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  ];

  return (
    <section
      id="testimoni"
      className="relative bg-gradient-to-br from-offWhite via-lightTeal/10 to-softGold/10 py-24 px-6 overflow-hidden"
    >
      {/* Background dekorasi blur */}
      <div className="absolute w-72 h-72 bg-lightTeal/20 blur-3xl rounded-full top-10 left-20 opacity-40"></div>
      <div className="absolute w-72 h-72 bg-softGold/20 blur-3xl rounded-full bottom-10 right-20 opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serifDisplay text-charcoal mb-4">
          Apa Kata Pelanggan Kami
        </h2>
        <p className="text-gray-600 font-poppins mb-12">
          Cerita mereka yang sudah mempercayakan pakaian ke{" "}
          <span className="text-softGold font-semibold">Authentic Laundry</span>{" "}
          💧
        </p>

        {/* Card grid */}
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-white/90 backdrop-blur-sm border border-lightTeal/30 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-lightTeal/40 shadow-sm group-hover:border-softGold transition-colors duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-softGold rounded-full"></div>
              </div>

              <p className="text-gray-700 italic mb-4 font-poppins leading-relaxed">
                “{item.text}”
              </p>
              <h4 className="font-semibold text-charcoal font-poppins">
                {item.name}
              </h4>
              <div className="w-16 h-[2px] bg-softGold mt-3 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

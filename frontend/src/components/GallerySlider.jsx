import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GallerySlider() {
  const images = [
    { id: 1, src: "/images/gallery1.png", title: "Cuci Kiloan", desc: "Layanan cepat dan hemat untuk pakaian harian." },
    { id: 2, src: "/images/gallery2.png", title: "Setrika Rapi", desc: "Pakaian Anda disetrika dengan rapi dan wangi." },
    { id: 3, src: "/images/gallery3.png", title: "Dry Cleaning", desc: "Perawatan khusus untuk bahan sensitif." },
    { id: 4, src: "/images/gallery4.jpeg", title: "Antar Jemput Gratis", desc: "Nikmati layanan antar jemput tanpa biaya." },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="gallery" className="py-16 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serifDisplay text-charcoal mb-10">
          Galeri Kami
        </h2>

        <Slider {...settings}>
          {images.map((img) => (
            <div key={img.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {img.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySlider() {
  const images = [
    { id: 1, src: "/images/gambar1.png", title: "Cuci Kiloan", desc: "Layanan cepat dan hemat untuk pakaian harian." },
    { id: 2, src: "/images/gambar2.png", title: "Setrika Rapi", desc: "Pakaian Anda disetrika dengan rapi dan wangi." },
    { id: 3, src: "/images/gambar3.png", title: "Dry Cleaning", desc: "Perawatan khusus untuk bahan sensitif." },
    { id: 4, src: "/images/gambar4.png", title: "Antar Jemput Gratis", desc: "Nikmati layanan antar jemput tanpa biaya." },
  ];

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 
        ${direction === "left" ? "left-2" : "right-2"} 
        bg-white/70 hover:bg-white text-gray-700 rounded-full shadow-md
        w-9 h-9 flex items-center justify-center
        md:w-11 md:h-11 transition-all duration-300
        backdrop-blur-sm`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      )}
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <ArrowButton direction="left" />,
    nextArrow: <ArrowButton direction="right" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1.2, slidesToScroll: 1, arrows: true } },
      { breakpoint: 640, settings: { slidesToShow: 1.1, slidesToScroll: 1, arrows: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true } },
    ],
  };

  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-br from-[#E3F2FD] via-[#F9FAFB] to-[#E0F7FA] relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serifDisplay text-gray-800 mb-10">
          Galeri Kami
        </h2>

        <Slider {...settings}>
          {images.map((img) => (
            <div key={img.id} className="px-3">
              <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-56 object-cover rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent opacity-70"></div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow text-center">
                  <h3 className="text-xl font-bold text-sky-600 mb-1">
                    {img.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

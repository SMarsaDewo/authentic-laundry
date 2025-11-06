import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OrderForm from "../components/OrderForm";
import Testimonial from "../components/Testimonial";
import Cart from "../components/Cart";
import GallerySlider from "../components/GallerySlider";

export default function Home() {
    const navigate = useNavigate();

  return (
    <>
      <Hero />
      <About />
      <GallerySlider />
      <Services />
      <OrderForm />
        {/* <button
        onClick={() => navigate("/summary")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        
      </button> */}

      <Testimonial />
      <Cart />
    </>
  );
}

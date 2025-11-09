import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OrderForm from "../components/OrderForm";
import Testimonial from "../components/Testimonial";
import Cart from "../components/Cart";
import GallerySlider from "../components/GallerySlider";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <About />
      <GallerySlider />
      <Services />
      <OrderForm />
      <Testimonial />
      <WhatsAppButton />
      <Cart />
    </>
  );
}

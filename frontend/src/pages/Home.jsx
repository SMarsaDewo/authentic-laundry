import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OrderForm from "../components/OrderForm";
import Testimonial from "../components/Testimonial";
import GallerySlider from "../components/GallerySlider";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GallerySlider />
      <Services />
      <OrderForm />
      <Testimonial />
      <WhatsAppButton />
    </>
  );
}

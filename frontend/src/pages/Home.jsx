import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OrderForm from "../components/OrderForm";
import Testimonial from "../components/Testimonial";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OrderForm />
      <Testimonial />
      <Cart />
    </>
  );
}

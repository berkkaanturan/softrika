import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ServicesAccordion from "@/components/ServicesAccordion";
import Process from "@/components/Process";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <ServicesAccordion />
      <Process />
      <Vision />
      <Footer />
    </>
  );
}

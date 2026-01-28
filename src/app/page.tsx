import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import ExtraServices from "@/components/ExtraServices"; // Nuevo
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Structure from "@/components/Structure";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-500">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        
        {/* Servicios adicionales para cerrar la venta */}
        <ExtraServices /> 

        <Marquee /> 
        <Structure />
        
        {/* Aquí es donde FAQ y Formulario se unen */}
        <Contact /> 
        
        <Footer />
      </div>
      <WhatsAppBtn />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Structure from "@/components/Structure";
import Marquee from "@/components/Marquee"; // 1. Importamos el nuevo componente

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-500">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        
        {/* 2. Marquesina de logos como validación social */}
        <Marquee /> 
        
        <Structure />
        <Contact />
        <Footer />
      </div>
      <WhatsAppBtn />
    </main>
  );
}
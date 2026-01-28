"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, ChevronRight, Globe, ShoppingCart, Layout } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["LANDING PAGES", "SITIOS WEB", "E-COMMERCE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20 transition-colors duration-500">
      
      {/* Capa de Video de Textura Adaptable */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.06] grayscale contrast-125">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-data-flow-background-9982-large.mp4" type="video/mp4" />
        </video>
        {/* Gradientes de profundidad: El 'from' y 'to' ahora usan las variables de fondo para no chocar */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge Superior Adaptativo */}
         

          {/* Título Principal con contraste corregido */}
          <div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-tight uppercase italic transition-colors duration-500"
            >
              Potenciamos tu <br />
              <div className="h-[1.2em] relative flex justify-center items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-600 dark:from-blue-600 dark:via-blue-400 dark:to-cyan-300 inline-block w-full py-2"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>
          </div>

          {/* Propuesta de Valor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mb-12"
          >
            <p className="text-foreground/70 text-lg md:text-2xl font-medium mb-10 transition-colors duration-500">
              Transformamos tu negocio con tecnología que <span className="text-foreground font-bold underline decoration-blue-500/50">vende de verdad</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: <Layout size={14}/>, label: "Landings" },
                { icon: <Globe size={14}/>, label: "Sitios Web" },
                { icon: <ShoppingCart size={14}/>, label: "Ecommerce" }
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 bg-foreground/5 px-4 py-2 rounded-xl border border-foreground/10 text-[10px] font-bold text-foreground/60 uppercase tracking-widest transition-all hover:bg-foreground/10">
                  {item.icon} {item.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Botones de Acción */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <motion.a 
              href="#precios" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/20"
            >
              Ver Ofertas <Rocket size={18} className="group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contacto" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground/5 hover:bg-foreground/10 backdrop-blur-md border border-foreground/10 text-foreground px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-sm"
            >
              Cotizar ahora <ChevronRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Fade inferior dinámico que usa la variable de fondo */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
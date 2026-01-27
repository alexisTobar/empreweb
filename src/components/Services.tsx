"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { MousePointer2, Globe2, ShoppingBag, ArrowRight } from "lucide-react";
import { MouseEvent } from "react";

const services = [
  { 
    t: "One Page", 
    d: "Una página web única, clara y eficiente. Ideal para presentar tu marca de forma directa, moderna y visualmente atractiva.",
    icon: <MousePointer2 className="text-blue-500" size={32} />,
    tag: "Conversión Directa"
  },
  { 
    t: "Sitio Web", 
    d: "Estructura amplia con navegación fluida. Perfecta para organizar contenido complejo y conectar con tus visitantes.",
    icon: <Globe2 className="text-blue-500" size={32} />,
    tag: "Presencia Corporativa"
  },
  { 
    t: "Ecommerce", 
    d: "Tienda online profesional, administrable y lista para vender. Incluye catálogo, carro de compras y gestión de pedidos.",
    icon: <ShoppingBag className="text-blue-500" size={32} />,
    tag: "Ventas Online"
  }
];

function ServiceCard({ s, i }: { s: typeof services[0], i: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href="#contacto"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      /* CAMBIO: Usamos glass-pro y text-foreground dinámico */
      className="group relative p-10 rounded-[3rem] glass-pro overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-blue-500/50"
    >
      {/* Resplandor siguiendo al mouse (ajustado para ser sutil en light mode) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-500">
          {s.icon}
        </div>
        <div className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300">
          <ArrowRight size={20} className="text-foreground group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-black text-foreground mb-4 uppercase italic tracking-tighter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {s.t}
        </h3>
        <p className="text-foreground/60 leading-relaxed text-base mb-8 group-hover:text-foreground/80 transition-colors">
          {s.d}
        </p>
      </div>

      <div className="mt-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/20 group-hover:border-blue-500/30 transition-all">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
            {s.tag}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-xs">
              Servicios Elite
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-foreground mb-8 italic uppercase tracking-tighter transition-colors"
          >
            Soluciones que <br /> <span className="text-blue-600">escalan tu marca</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { ImagePlus, Settings2, ShoppingCart, PlusCircle, ShieldCheck } from "lucide-react";

const extraServices = [
  { title: "Carga de Imágenes", desc: "Optimización técnica para velocidad de carga.", icon: <ImagePlus size={22}/> },
  { title: "Mantenimiento Post-Entrega", desc: "Soporte técnico y seguridad opcional.", icon: <Settings2 size={22}/> },
  { title: "Carga de Productos SEO", desc: "Atributos detallados y descripciones manuales.", icon: <ShoppingCart size={22}/> },
  { title: "Secciones Adicionales", desc: "Escalamos tu sitio según crezca tu marca.", icon: <PlusCircle size={22}/> },
];

export default function ExtraServices() {
  return (
    <section className="pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Explicación de Valor */}
        <div className="mb-12 p-8 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/5 flex flex-col md:flex-row items-center gap-8">
          <div className="p-5 bg-blue-600/10 rounded-3xl text-blue-600">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-foreground uppercase italic mb-2">
              ¿Por qué elegir <span className="text-blue-600">Servicios Adicionales</span>?
            </h3>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-4xl">
              Un sitio web exitoso requiere mantenimiento y contenido de calidad. Nuestros servicios extra no son solo carga de datos; realizamos una <strong>optimización SEO manual</strong> en cada producto e imagen, mejorando atributos como color, calidad y descripciones personalizadas. Esto garantiza que tus clientes te encuentren más fácil en Google y que la navegación sea fluida y profesional.
            </p>
          </div>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extraServices.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-[2rem] border border-foreground/5 bg-foreground/[0.02] flex items-center gap-5 transition-all hover:bg-foreground/[0.04] hover:border-blue-500/20"
            >
              <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-600">
                {service.icon}
              </div>
              <div>
                <h4 className="text-sm font-black uppercase text-foreground italic tracking-tight">{service.title}</h4>
                <p className="text-[11px] text-foreground/50 leading-tight mt-1">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
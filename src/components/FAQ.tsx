"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  { q: "Modalidad de pago", a: "Se paga el 50% al iniciar el proyecto y el 50% restante una vez finalizado y entregado. Nota: La carga de productos adicionales se realiza tras la entrega oficial de la web." },
  { q: "¿Cuánto tiempo se demora?", a: "Depende de la carga de proyectos. El plazo máximo garantizado es de 30 días hábiles. Sin embargo, lo habitual es entregar entre 7 a 14 días hábiles." },
  { q: "Costo por subir productos adicionales", a: "Si prefieres que nosotros gestionemos la carga extra, el costo es de $5.000 CLP por producto en el plan E-commerce y $3.000 CLP en el plan Premium." },
  { q: "Beneficios de la carga manual SEO", a: "Optimizamos atributos y descripciones de forma manual para que Google indexe tus productos más rápido y vendas más." },
  { q: "¿Qué cubre la garantía?", a: "Cubre la actualización y corrección de información técnica en la web después de la entrega, sin costo adicional." },
  { q: "¿Mi web tendrá mantenimiento?", a: "Incluimos mantenimiento gratuito los primeros días según tu plan. Posterior a eso, ofrecemos un servicio opcional de alta disponibilidad." }
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto lg:mx-0">
      {/* Header de la sección con un toque de brillo */}
      <div className="mb-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-blue-600 mb-4"
        >
          <div className="p-2 bg-blue-600/10 rounded-lg">
            <Sparkles size={16} className="animate-pulse" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Soporte Premium</span>
        </motion.div>
        
        <h3 className="text-5xl md:text-6xl font-black text-foreground uppercase italic tracking-tighter leading-none">
          Dudas <br /><span className="text-blue-600">Comunes</span>
        </h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isExpanded = expanded === i;
          
          return (
            <motion.div 
              key={i}
              initial={false}
              animate={{ 
                scale: isExpanded ? 1.02 : 1,
                opacity: expanded !== null && !isExpanded ? 0.6 : 1
              }}
              className={`group cursor-pointer overflow-hidden rounded-[2.5rem] border transition-all duration-500 ${
                isExpanded 
                  ? 'bg-blue-600 border-blue-400 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]' 
                  : 'glass-pro hover:border-blue-500/50'
              }`}
              onClick={() => setExpanded(isExpanded ? null : i)}
            >
              <div className="p-7 flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-black transition-colors ${isExpanded ? 'text-white/40' : 'text-blue-600'}`}>
                    0{i + 1}
                  </span>
                  <span className={`font-bold text-sm md:text-base uppercase tracking-tight transition-colors ${
                    isExpanded ? 'text-white' : 'text-foreground/80'
                  }`}>
                    {faq.q}
                  </span>
                </div>
                
                <motion.div 
                  animate={{ 
                    rotate: isExpanded ? 90 : 0,
                    scale: isExpanded ? 1.2 : 1
                  }} 
                  className={isExpanded ? 'text-white' : 'text-blue-600'}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                    animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                    exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-14 pb-8 text-sm md:text-base text-white/90 leading-relaxed font-medium italic">
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {faq.a}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
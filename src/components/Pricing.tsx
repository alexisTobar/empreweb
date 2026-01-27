"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, X, ShieldCheck } from "lucide-react";
import { useState } from "react";

type Category = "Landing" | "Web" | "Ecommerce";

interface Feature { text: string; included: boolean; }
interface Plan { name: string; oldPrice: string; price: string; highlight: boolean; features: Feature[]; }

const pricingData: Record<Category, Plan[]> = {
  Landing: [
    { 
      name: "Plan Starter", oldPrice: "124.988", price: "99.990", highlight: false,
      features: [
        { text: "Una sección", included: true }, { text: "Adaptable a móviles", included: true },
        { text: "Botón de WhatsApp", included: true }, { text: "Formulario contacto", included: true },
        { text: "Soporte asistido", included: true }, { text: "Auto-administrable WP", included: true },
        { text: "Galería de imágenes", included: false }, { text: "Optimización SEO", included: false },
        { text: "Google Analytics", included: false }
      ] 
    },
    { 
      name: "Plan Standard", oldPrice: "199.988", price: "159.990", highlight: true,
      features: [
        { text: "5 secciones", included: true }, { text: "Adaptable a móviles", included: true },
        { text: "Botón de WhatsApp", included: true }, { text: "Galería de imágenes", included: true },
        { text: "Mapa de ubicación", included: true }, { text: "Optimización SEO", included: true },
        { text: "Google Analytics", included: false }, { text: "Integración Pixel Ads", included: false }
      ] 
    },
    { 
      name: "Plan Premium", oldPrice: "262.488", price: "209.990", highlight: false,
      features: [
        { text: "10 secciones", included: true }, { text: "Botón de WhatsApp", included: true },
        { text: "Optimización SEO Pro", included: true }, { text: "Google Analytics", included: true },
        { text: "Estadísticas del sitio", included: true }, { text: "Multi-idioma", included: true },
        { text: "Integración Pixel Ads", included: true }
      ] 
    },
  ],
  Web: [
    { 
      name: "Plan Starter", oldPrice: "312.488", price: "249.990", highlight: false,
      features: [
        { text: "Hasta 3 páginas", included: true }, { text: "Adaptable a móviles", included: true },
        { text: "Auto-administrable WP", included: true }, { text: "Botón WhatsApp", included: true },
        { text: "Sección de Blogs", included: false }, { text: "Mapa de ubicación", included: false },
        { text: "Registro de usuarios", included: false }, { text: "Optimización SEO", included: false }
      ] 
    },
    { 
      name: "Plan Standard", oldPrice: "412.488", price: "329.990", highlight: true,
      features: [
        { text: "Hasta 5 páginas", included: true }, { text: "Auto-administrable WP", included: true },
        { text: "Sección de Blogs", included: true }, { text: "Mapa de ubicación", included: true },
        { text: "Galería de imágenes", included: true }, { text: "Optimización SEO", included: true },
        { text: "Google Analytics", included: true }, { text: "ChatBot inteligente", included: false }
      ] 
    },
    { 
      name: "Plan Premium", oldPrice: "449.988", price: "359.990", highlight: false,
      features: [
        { text: "Hasta 10 páginas", included: true }, { text: "Sección Blogs + Comentarios", included: true },
        { text: "Registro de usuarios", included: true }, { text: "Optimización SEO Pro", included: true },
        { text: "Google Analytics + Stats", included: true }, { text: "ChatBot Inteligente", included: true },
        { text: "Video tutoriales", included: true }, { text: "Pixel Ads", included: true }
      ] 
    },
  ],
  Ecommerce: [
    { 
      name: "Plan Starter", oldPrice: "387.488", price: "309.990", highlight: false,
      features: [
        { text: "Catálogo (50 productos)", included: true }, { text: "Carrito de compras", included: true },
        { text: "Gestión de pedidos", included: true }, { text: "Adaptable a móviles", included: true },
        { text: "Buscador de productos", included: false }, { text: "Cupones de descuento", included: false },
        { text: "Integración Logística", included: false }, { text: "Google Analytics", included: false }
      ] 
    },
    { 
      name: "Plan Standard", oldPrice: "499.988", price: "399.990", highlight: true,
      features: [
        { text: "Catálogo (100 productos)", included: true }, { text: "Filtros y Buscador", included: true },
        { text: "Cupones de descuento", included: true }, { text: "SEO optimizado", included: true },
        { text: "Chilexpress/Starken", included: true }, { text: "Estadísticas sitio", included: true },
        { text: "Blog de noticias", included: true }, { text: "Chatbot", included: false }
      ] 
    },
    { 
      name: "Plan Premium", oldPrice: "624.988", price: "499.990", highlight: false,
      features: [
        { text: "Catálogo (150 productos)", included: true }, { text: "Lista de deseados", included: true },
        { text: "Comentarios productos", included: true }, { text: "Pixel Ads", included: true },
        { text: "Reviews de usuarios", included: true }, { text: "Chatbot IA", included: true },
        { text: "Multi-idioma", included: true }, { text: "Blog + Comentarios", included: true }
      ] 
    },
  ],
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Category>("Landing");

  return (
    <section id="precios" className="py-32 bg-transparent px-6 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-foreground mb-6 uppercase tracking-tighter italic transition-colors"
          >
            Planes
          </motion.h2>

          {/* BLOQUE DE PAGO ÚNICO ADAPTATIVO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16 p-8 rounded-[2.5rem] bg-blue-600/10 border border-blue-600/20 backdrop-blur-xl relative overflow-hidden group shadow-lg shadow-blue-500/5 transition-all"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
              <div className="p-4 bg-blue-600/20 rounded-2xl text-blue-600 dark:text-blue-400 transition-colors">
                <ShieldCheck size={40} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-2 uppercase italic tracking-tight transition-colors">
                  Pago Único <span className="text-blue-600 dark:text-blue-500">(Sin Mensualidades)</span>
                </h3>
                <p className="text-foreground/60 text-sm md:text-base leading-relaxed transition-colors">
                  Sin contratos ni costos ocultos. <span className="text-foreground font-bold">Pagas una vez</span> y obtienes tu sitio web completo, optimizado y bajo tu total control.
                </p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />
          </motion.div>
          
          {/* TABS SELECTOR */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(["Landing", "Web", "Ecommerce"] as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all relative ${
                  activeTab === tab ? "text-white" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PLANES */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {pricingData[activeTab].map((plan, i) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                /* CAMBIO CLAVE: Usamos glass-pro o un fondo azulado si es destacado */
                className={`p-10 rounded-[3.5rem] border transition-all duration-500 relative flex flex-col group ${
                  plan.highlight 
                    ? 'border-blue-600 bg-blue-600/[0.08] dark:bg-blue-600/20 shadow-xl shadow-blue-500/10' 
                    : 'glass-pro'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-8 right-8 text-blue-600"><Zap size={24} fill="currentColor" /></div>
                )}
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-blue-600 mb-2">{activeTab}</h3>
                <h4 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight transition-colors">{plan.name}</h4>
                <div className="mb-10">
                  <span className="text-foreground/40 line-through text-lg block mb-1 transition-colors">${plan.oldPrice}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-foreground transition-colors">${plan.price}</span>
                    <span className="text-foreground/50 text-xs font-bold uppercase tracking-widest transition-colors">CLP</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm font-medium leading-relaxed transition-colors ${feature.included ? 'text-foreground/70' : 'text-foreground/30'}`}>
                      {feature.included ? (
                        <Check className="text-blue-600 mt-0.5 shrink-0" size={18} />
                      ) : (
                        <X className="text-red-500/50 dark:text-red-900 mt-0.5 shrink-0" size={18} />
                      )}
                      <span className={!feature.included ? 'line-through' : ''}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '#contacto'}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${
                  plan.highlight 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-foreground text-background hover:bg-blue-600 hover:text-white'
                }`}>
                  Quiero este plan
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
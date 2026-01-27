"use client";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, BarChart3, Search, LayoutPanelLeft, ArrowUpRight } from "lucide-react";

const structures = [
  {
    title: "Landing de Ventas",
    subtitle: "Foco en Conversión",
    description: "Una herramienta persuasiva diseñada para guiar al usuario hacia un solo objetivo: Comprar o Agendar.",
    icon: <Target className="text-blue-500" size={32} />,
    url: "https://empreweb-agency.vercel.app/", 
    points: [
      { t: "Sección Hero", d: "Captura el interés en menos de 2 segundos.", icon: <Zap size={18}/> },
      { t: "Beneficios Clave", d: "Transformamos características en soluciones.", icon: <ShieldCheck size={18}/> },
      { t: "Prueba Social", d: "Testimonios que validan tu servicio.", icon: <BarChart3 size={18}/> }
    ]
  },
  {
    title: "Sitio Web Autoridad",
    subtitle: "Tu Sucursal 24/7",
    description: "Genera confianza y posicionamiento orgánico en Google. Ideal para empresas con múltiples servicios.",
    icon: <LayoutPanelLeft className="text-blue-500" size={32} />,
    url: "https://empreweb-agency.vercel.app/", 
    points: [
      { t: "Navegación & UX", d: "Menú estructurado para mayor profesionalismo.", icon: <LayoutPanelLeft size={18}/> },
      { t: "Catálogo Digital", d: "Muestra la magnitud de todo lo que ofreces.", icon: <LayoutPanelLeft size={18}/> },
      { t: "SEO Optimizado", d: "Estructura preparada para atraer tráfico gratis.", icon: <Search size={18}/> }
    ]
  }
];

export default function Structure() {
  return (
    <section id="metodologia" className="py-32 bg-transparent px-6 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase italic tracking-tighter transition-colors"
          >
            Estrategia <span className="text-blue-600">Digital Premium</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg transition-colors">
            No solo programamos código, diseñamos estructuras de alto impacto que impulsan negocios reales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {structures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              /* Aplicamos glass-pro para sombras en light mode y transparencia en dark */
              className="p-10 rounded-[3rem] glass-pro relative overflow-hidden group flex flex-col h-full transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground uppercase italic transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              
              <p className="text-foreground/60 mb-10 leading-relaxed flex-grow transition-colors">
                {item.description}
              </p>

              <div className="space-y-6 mb-12">
                {item.points.map((point, j) => (
                  <div key={j} className="flex gap-4 items-start p-4 rounded-2xl bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-colors border border-foreground/5">
                    <div className="text-blue-600 mt-1">{point.icon}</div>
                    <div>
                      <h4 className="text-foreground font-bold text-sm uppercase tracking-wider transition-colors">
                        {point.t}
                      </h4>
                      <p className="text-foreground/50 text-sm transition-colors">
                        {point.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTÓN ADAPTATIVO */}
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-foreground py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group/btn"
              >
                Ver Estructura 
                <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>

              {/* Decoración de fondo adaptada */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

const projects = [
  { name: "E-Commerce Pro", url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop" },
  { name: "App Interface", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" },
  { name: "Landing Page", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
  { name: "Corporate Web", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop" },
  { name: "Saas Platform", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
  { name: "Dashboard AI", url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop" },
];

export default function Marquee() {
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className="py-24 bg-transparent overflow-hidden relative border-y border-foreground/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-blue-600 dark:text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] text-center">
          Proyectos Recientes Destacados
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Máscaras de degradado adaptativas para suavizar los bordes */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-60 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap gap-8 items-center whitespace-nowrap px-10"
        >
          {duplicatedProjects.map((project, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-64 md:w-80 h-48 rounded-3xl overflow-hidden glass-pro transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer"
            >
              {/* Imagen a todo color */}
              <img
                src={project.url}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay para legibilidad del nombre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-xs font-black uppercase tracking-widest">
                  {project.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
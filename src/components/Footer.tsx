"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Footer() {
  // Optimizamos la URL de Cloudinary para rendimiento máximo
  const videoUrl = "https://res.cloudinary.com/dldx6jj6r/video/upload/f_auto,q_auto/v1769531659/Video_De_Presentaci%C3%B3n_Con_Logo.mp4";

  return (
    <footer className="relative py-24 overflow-hidden border-t border-white/5 bg-transparent">
      {/* 1. VIDEO DE FONDO DINÁMICO */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Overlay para fundir el video con el fondo líquido de la landing */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo con animación sutil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <img 
              src="https://i.postimg.cc/d76BNMRM/favicon.png" 
              alt="EmpreWeb Favicon" 
              className="h-16 w-auto drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
            />
          </motion.div>

          {/* Redes Sociales - Instagram */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 mb-14"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Síguenos</span>
            <a 
              href="https://www.instagram.com/empre_web/" // Reemplaza con tu cuenta real
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-white/5 rounded-2xl border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all group shadow-2xl"
            >
              <Instagram size={28} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Información Final */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                Talagante, Chile
              </span>
              <span className="hidden md:block opacity-20">|</span>
              <span className="hover:text-blue-500 transition-colors cursor-default">Desarrollo de Alto Impacto</span>
            </div>
            
            <div className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-bold pt-6 border-t border-white/5">
              © {new Date().getFullYear()} EmpreWeb — Todos los derechos reservados
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
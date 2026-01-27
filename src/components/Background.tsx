"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-20 liquid-bg overflow-hidden pointer-events-none transition-colors duration-700">
      
      {/* Esfera Azul - Marca EmpreWeb */}
      <motion.div 
        animate={{ 
          x: [0, 150, 0], 
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        // En modo claro la bajamos a /5 para que no ensucie el blanco
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-blue-600/5 dark:bg-blue-600/20 rounded-full blur-[120px] transition-all"
      />

      {/* Esfera Púrpura - Contraste Tecnológico */}
      <motion.div 
        animate={{ 
          x: [0, -150, 0], 
          y: [0, -80, 0],
          scale: [1.3, 1, 1.3],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[150px] transition-all"
      />

      {/* Grilla técnica sutil: currentColor detecta el color del texto automáticamente */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] transition-opacity duration-700" 
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Asegúrate de crear este archivo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-2xl shadow-2xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-28 flex justify-between items-center">
        
        {/* Contenedor del Logo: h-56 intacto */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex items-center h-full"
        >
          <a href="#inicio" className="block">
            <motion.img 
              src="https://i.postimg.cc/ThFc4JbR/logo.png" 
              alt="EmpreWeb Logo" 
              className="h-56 w-auto drop-shadow-[0_0_30px_rgba(37,99,235,0.4)] object-contain transition-all"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            />
          </a>
        </motion.div>
        
        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110"
            >
              {item.name}
            </a>
          ))}
          
          {/* Botón Switch de Tema */}
          <ThemeToggle />

          <motion.a 
            href="https://empreweb-agency.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37,99,235,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-10 py-3.5 rounded-full text-[10px] font-black tracking-[0.2em] transition-all flex items-center justify-center"
          >
            VER ESTRUCTURA WEB
          </motion.a>
        </div>

        {/* Botón Menú Móvil */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-28 left-0 w-full bg-white dark:bg-[#050505] border-b border-black/10 dark:border-white/10 flex flex-col items-center py-10 gap-8 md:hidden shadow-2xl backdrop-blur-3xl"
          >
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[12px] uppercase tracking-[0.5em] font-black text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://empreweb-agency.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-[10px] font-black tracking-[0.2em]"
            >
              VER ESTRUCTURA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
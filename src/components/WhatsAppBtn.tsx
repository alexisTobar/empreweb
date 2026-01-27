"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBtn() {
  return (
    <motion.a
      href="https://wa.me/56977922875"
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[200] bg-[#25D366] p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] text-white"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-lg whitespace-nowrap shadow-xl">
        ¿NECESITAS AYUDA?
      </span>
    </motion.a>
  );
}
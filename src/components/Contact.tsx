"use client";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Integración con EmailJS utilizando variables de entorno
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      form.current!, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      toast.success("¡Mensaje enviado con éxito!");
      form.current?.reset();
    })
    .catch((error) => {
      toast.error("Error al enviar. Intenta de nuevo.");
      console.error(error);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contacto" className="py-32 bg-transparent px-6 relative z-10 transition-colors duration-500">
      <Toaster richColors position="bottom-right" />
      
      {/* Contenedor con glass-pro para sombras en Light Mode y profundidad en Dark Mode */}
      <div className="max-w-4xl mx-auto glass-pro p-12 md:p-20 rounded-[4rem] transition-all">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6 uppercase tracking-tighter italic transition-colors">
            Hablemos
          </h2>
          <p className="text-foreground/60 text-lg font-medium transition-colors">
            Recibe un presupuesto formal de EmpreWeb.
          </p>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Nombre adaptativo */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600">Nombre</label>
              <input 
                name="user_name" 
                type="text" 
                required 
                className="bg-transparent border-b border-foreground/20 focus:border-blue-600 outline-none transition-all text-foreground placeholder:text-foreground/30 disabled:opacity-50 py-4" 
                placeholder="Ej. Alexis Tobar" 
                disabled={isSending} 
              />
            </div>
            {/* Input Email adaptativo */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600">Email</label>
              <input 
                name="user_email" 
                type="email" 
                required 
                className="bg-transparent border-b border-foreground/20 focus:border-blue-600 outline-none transition-all text-foreground placeholder:text-foreground/30 disabled:opacity-50 py-4" 
                placeholder="tu@empresa.com" 
                disabled={isSending} 
              />
            </div>
          </div>

          {/* Textarea Mensaje adaptativo */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600">Mensaje</label>
            <textarea 
              name="message" 
              rows={4} 
              required 
              className="bg-transparent border-b border-foreground/20 focus:border-blue-600 outline-none transition-all text-foreground placeholder:text-foreground/30 resize-none disabled:opacity-50 py-4" 
              placeholder="¿En qué podemos ayudarte?" 
              disabled={isSending}
            ></textarea>
          </div>

          <motion.button 
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.02 } : {}}
            whileTap={!isSending ? { scale: 0.98 } : {}}
            className="w-full bg-blue-600 dark:bg-white text-white dark:text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-blue-700 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xl disabled:bg-foreground/20 disabled:text-foreground/40 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>Enviando... <Loader2 className="animate-spin" size={18} /></>
            ) : (
              <>Enviar Mensaje <Send size={18} /></>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
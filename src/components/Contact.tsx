"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import FAQ from "./FAQ"; 

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      form.current!, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setStatus("success");
      // Alerta moderna estilo "Glass Toast"
      toast.success("Proyecto Recibido", {
        description: "Alexis revisará tu propuesta y te contactará en breve.",
        icon: <CheckCircle2 className="text-green-500" size={20} />,
      });
      form.current?.reset();
      // Volver al estado inicial después de 3 segundos
      setTimeout(() => setStatus("idle"), 3000);
    })
    .catch((error) => {
      setStatus("error");
      toast.error("Error de Conexión", {
        description: "No pudimos enviar el formulario. Intenta vía WhatsApp.",
        icon: <AlertCircle className="text-red-500" size={20} />,
      });
      setTimeout(() => setStatus("idle"), 3000);
    });
  };

  return (
    <section id="contacto" className="py-32 bg-transparent px-6 relative z-10 transition-colors duration-500">
      {/* Toaster con estilo moderno: fondo blur y bordes finos */}
      <Toaster 
        richColors 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'var(--card-bg)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--card-border)',
            color: 'var(--foreground)',
            borderRadius: '1.5rem',
            padding: '1rem',
          },
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <FAQ />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-pro p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden"
          >
            <div className="mb-10 text-left">
              <h2 className="text-4xl font-black text-foreground mb-4 uppercase tracking-tighter italic">
                Cotiza tu <span className="text-blue-600">Proyecto</span>
              </h2>
              <p className="text-foreground/60 text-sm font-medium">
                Respuesta garantizada en menos de 24 horas.
              </p>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600">Nombre</label>
                <input 
                  name="user_name" 
                  type="text" 
                  required 
                  className="bg-transparent border-b border-foreground/10 focus:border-blue-600 outline-none transition-all text-foreground placeholder:text-foreground/20 py-3 text-sm" 
                  placeholder="Ej. Alexis Tobar" 
                  disabled={status === "sending"} 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600">Email</label>
                <input 
                  name="user_email" 
                  type="email" 
                  required 
                  className="bg-transparent border-b border-foreground/10 focus:border-blue-600 outline-none transition-all text-foreground placeholder:text-foreground/20 py-3 text-sm" 
                  placeholder="tu@empresa.com" 
                  disabled={status === "sending"} 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600">Mensaje</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  required 
                  className="bg-transparent border-b border-foreground/10 focus:border-blue-600 outline-none transition-all text-foreground placeholder:text-foreground/20 resize-none py-3 text-sm" 
                  placeholder="Cuéntanos sobre tu idea..." 
                  disabled={status === "sending"}
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={status !== "idle"}
                animate={{
                  backgroundColor: status === "success" ? "#22c55e" : status === "error" ? "#ef4444" : "#2563eb",
                }}
                className="w-full text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-80 text-xs"
              >
                <AnimatePresence mode="wait">
                  {status === "sending" && (
                    <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={16} /> Procesando
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 size={16} /> ¡Enviado!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div key="error" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <AlertCircle size={16} /> Error
                    </motion.div>
                  )}
                  {status === "idle" && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Enviar Mensaje <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
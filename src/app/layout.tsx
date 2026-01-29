import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EmpreWeb | Diseño Web Profesional y Ecommerce en Chile",
  description: "Desarrollo de Landing Pages y Páginas Web de alto impacto en Talagante. Expertos en Next.js, SEO y Ventas Digitales para emprendedores.",
  
  metadataBase: new URL("https://empreweb.cl"),
  
  alternates: {
    canonical: "/",
  },

  // SOLUCIÓN FAVICON: Apuntando a archivos locales en src/app/
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "EmpreWeb | Potencia tu Negocio con una Web Profesional",
    description: "Creamos experiencias digitales modernas, rápidas y optimizadas para Google.",
    url: "https://empreweb.cl",
    siteName: "EmpreWeb Studio",
    images: [{
      url: "https://i.postimg.cc/ThFc4JbR/logo.png", 
      width: 1200, 
      height: 630, 
      alt: "EmpreWeb Studio Chile",
    }],
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EmpreWeb | Desarrollo Web en Talagante",
    description: "Transformamos tu idea en un activo digital que vende 24/7.",
    images: ["https://i.postimg.cc/ThFc4JbR/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500 selection:bg-blue-500 selection:text-white`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          document-domain="empreweb.cl"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
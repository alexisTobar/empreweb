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
  title: "EmpreWeb | Soluciones y Desarrollo Web Profesional",
  description: "Expertos en Landing Pages, Desarrollo a medida y Mantenimiento Web en Talagante.",
  metadataBase: new URL("https://empreweb.vercel.app"),
  icons: {
    icon: "https://i.postimg.cc/mD7pYfV6/favicon.png", 
    shortcut: "https://i.postimg.cc/mD7pYfV6/favicon.png",
    apple: "https://i.postimg.cc/mD7pYfV6/favicon.png",
  },
  openGraph: {
    title: "EmpreWeb | Soluciones y Desarrollo Web",
    description: "Desarrollo web de alto impacto. Creamos experiencias digitales modernas y escalables.",
    url: "https://empreweb.vercel.app",
    siteName: "EmpreWeb",
    images: [{
      url: "https://i.postimg.cc/ThFc4JbR/logo.png",
      width: 1200, height: 630, alt: "EmpreWeb Logo",
    }],
    locale: "es_CL",
    type: "website",
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
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
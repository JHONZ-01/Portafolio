import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import "../styles/portfolio.css";
import "../styles/projects-showcase.css";
import { AppPreferencesProvider } from "@/components/providers/AppPreferencesProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { RevealObserver } from "@/components/layout/RevealObserver";

const fontPrimary = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jhon Paucar · Programador junior",
  description:
    "Portafolio de Jhon Paucar: desarrollo la plataforma de créditos de una empresa de celulares y configuro los teléfonos que dependen de ella.",
};

// Aplica tema guardado y marca que hay JS antes del primer pintado.
const bootScript = `(function(){try{document.documentElement.classList.add('js');var t=localStorage.getItem('portfolio-theme');if(t==='dark'||t==='light'){document.body.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontPrimary.variable} antialiased`}
      suppressHydrationWarning
    >
      <body data-theme="light" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <AppPreferencesProvider>
          <Navbar />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
          <Footer />
          <RevealObserver />
        </AppPreferencesProvider>
      </body>
    </html>
  );
}

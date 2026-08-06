import type { Metadata } from "next";
import { Fira_Code, Tajawal } from "next/font/google";
import "../styles/globals.css";
import "../styles/portfolio.css";
import { AppPreferencesProvider } from "@/components/providers/AppPreferencesProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageBackground } from "@/components/layout/PageBackground";
import { PageTransition } from "@/components/layout/PageTransition";

const fontPrimary = Tajawal({
  variable: "--font-primary",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

const fontCode = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontPrimary.variable} ${fontCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppPreferencesProvider>
          <div className="relative min-h-full bg-[var(--bg-dark)] font-sans">
            <PageBackground />
            <Navbar />
            <PageTransition>
              <main className="mx-auto w-full max-w-5xl px-6">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </div>
        </AppPreferencesProvider>
      </body>
    </html>
  );
}

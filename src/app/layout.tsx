import type { Metadata } from "next";
import { Fira_Code, Tajawal } from "next/font/google";
import "../styles/globals.css";
import "../styles/portfolio.css";
import { AppPreferencesProvider } from "@/components/providers/AppPreferencesProvider";

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
        <AppPreferencesProvider>{children}</AppPreferencesProvider>
      </body>
    </html>
  );
}

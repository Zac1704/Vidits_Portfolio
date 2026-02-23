import { Geist, Geist_Mono, Caveat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/components/Footer";
import AppleDock from "@/components/AppleDock";
import ClientRouteGate from "@/components/ClientRouteGate";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter", // This creates the CSS variable
});

const futura = localFont({
  src: "./fonts/Futura.otf",
  variable: "--font-futura",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Vidit Shah — Graphics & UI/UX Designer",
  description:
    "Portfolio of Vidit Shah, a self-taught Graphics & UI/UX Designer based in Indore, India. Explore creative projects, case studies, and design work.",
  keywords: ["Vidit Shah", "UI/UX Designer", "Graphics Designer", "Portfolio", "Indore"],
  authors: [{ name: "Vidit Shah" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={[
          futura.variable,
          geistSans.variable,
          geistMono.variable,
          caveat.variable,
          inter.variable,
          "select-none antialiased hide-scrollbar bg-[var(--background)]",
        ].join(" ")}
      >
        {children}

        {/* Client-only route aware UI */}
        <ClientRouteGate>
          <Footer />
          <AppleDock />
        </ClientRouteGate>
      </body>
    </html>
  );
}


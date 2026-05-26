import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Richard Couget | Método DAPA",
  description:
    "Finanzas personales desde la estructura, la claridad y el diseño consciente.",

  keywords: [
    "Richard Couget",
    "Método DAPA",
    "Finanzas personales",
    "Educación financiera",
    "Psicología financiera",
    "Finanzas DAPA",
    "Estabilidad financiera",
    "Finanzas conscientes",
  ],

  authors: [
    {
      name: "Richard Couget",
    },
  ],

  openGraph: {
    title: "Richard Couget | Método DAPA",
    description:
      "Finanzas personales desde la estructura, la claridad y el diseño consciente.",
    url: "https://richardcouget.com",
    siteName: "Richard Couget",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
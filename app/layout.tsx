import "./globals.css";
import Script from "next/script";
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
       alt: "Richard Couget | Método DAPA",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>

        <Script
         src="https://www.googletagmanager.com/gtag/js?id=G-5HQYLNY2BL"
         strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
         {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

           gtag('config', 'G-5HQYLNY2BL');
          `}
        </Script>

  {children}

</body>
    </html>
  );
}
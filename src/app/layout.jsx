import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "swiper/css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    default: "Cutting Edge Correction",
    template: "%s | CEC"
  },
  description: "Professional Detailing Services in Australia",
  icons: {
    icon: '/favicon.ico',
    sizes: 'any',
  },
  openGraph: {
    title: "Cutting Edge Correction",
    description: "Professional Automotive Detailing",
    url: "https://cecdetailing.com.au",
    siteName: "CEC Detailing",
    type: "website"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cutting Edge Correction",
  "description": "Professional Automotive Detailing Services",
  "url": "https://cecdetailing.com.au",
  "telephone": "+61 PHONE_NUMBER",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR_ADDRESS",
    "addressLocality": "CITY",
    "addressRegion": "STATE",
    "postalCode": "POSTCODE",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "YOUR_LATITUDE",
    "longitude": "YOUR_LONGITUDE"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Ceramic Coating",
      "description": "Professional ceramic coating application"
    },
    {
      "@type": "Service", 
      "name": "Paint Correction",
      "description": "Comprehensive paint restoration"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16655963362"
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16655963362');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className={`${roboto.className} antialiased relative`}>
        <Navbar />
        <main className="flex flex-wrap flex-col items-center justify-between mx-auto w-full min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
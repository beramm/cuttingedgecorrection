import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "swiper/css";




const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    absolute: "", // to ignore the template
    default: "Cutting Edge Correction",
    template: "%s | CEC" // using %s so it can be dynamic title name
  },
  description: "Cutting Edge Correction, AU",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cutting Edge Correction",
  "image": "https://www.cecdetailing.com.au/_next/image?url=%2Fcec_logo.png&w=128&q=75",
  "@id": "https://www.cecdetailing.com.au/our-location",
  "url": "https://www.cecdetailing.com.au/our-location",
  "telephone": "0450 649 257",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "67 Walsgott Street",
    "addressLocality": "North Geelong",
    "addressRegion": "VIC",
    "postalCode": "3215",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -38.1167031,
    "longitude": 144.3443453
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://web.facebook.com/CuttingEdgeCorrection",
    "https://www.instagram.com/cuttingedgecorrection"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16655963362"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16655963362');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />


      </head>
      <body className={`${roboto.className} antialiased relative`}>
        <Navbar />
        <main className="flex flex-wrap flex-col items-center justify-between mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

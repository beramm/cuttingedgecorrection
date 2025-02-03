import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "swiper/css";
import Image from "next/image";




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
  icons: {
    icon: '/favicon.ico',
    sizes: 'any',
    rel: 'icon',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ceramic Coating",
      "url": "https://www.cecdetailing.com.au/services/ceramic-coating"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Decontamination",
      "url": "https://www.cecdetailing.com.au/services/decontamination"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Paint Correction",
      "url": "https://www.cecdetailing.com.au/services/paint-correction"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Headlight Restoration",
      "url": "https://www.cecdetailing.com.au/services/headlight-restoration"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Interior Detailing",
      "url": "https://www.cecdetailing.com.au/services/interior-detailing"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Engine Bay Detail",
      "url": "https://www.cecdetailing.com.au/services/engine-bay-detail"
    }
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
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
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

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
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/ceramic-coating",
        "name": "Ceramic Coating",
        "description": "This is an introductory CS course laying out the basics.",
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/decontamination",
        "name": "Decontamination",
        "description": "This is a CS course that builds on the basics learned in the Introduction course.",
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/paint-correction",
        "name": "Paint Correction",
        "description": "This is a CS course that builds on the basics learned in the Introduction course.",
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/headlight-restoration",
        "name": "Headlight Restoration",
        "description": "This is a CS course that builds on the basics learned in the Introduction course.",
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/interior-detailing",
        "name": "Interior Detailing",
        "description": "This is a CS course that builds on the basics learned in the Introduction course.",
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/engine-bay-detail",
        "name": "Engine Bay Detail",
        "description": "This is a CS course that builds on the basics learned in the Introduction course.",
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Course",
        "url": "https://www.cecdetailing.com.au/services/",
        "name": "Our Location",
        "description": "This is a CS course that builds on the basics learned in the Introduction course.",
      }
    },
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

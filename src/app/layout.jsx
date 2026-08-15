import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "swiper/css";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/next';





const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// `src/app/favicon.ico` is picked up automatically by the App Router, which
// emits the <link rel="icon"> itself. Declaring it again here (or by hand in
// <head>) made the browser fetch the icon twice.
export const metadata = {};

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
          src="https://www.googletagmanager.com/gtag/js?id=AW-16846417732"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16846417732');
            `,
          }}

        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
            'send_to': 'AW-16846417732/cyNXCN_imaIaEMTe_-A-',
            'event_callback': callback
          });
          return false;
        }
      `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className={`${roboto.className} antialiased relative overflow-x-hidden lg:overflow-x-visible`}>
        <Navbar />
        <main className="flex flex-wrap flex-col items-center justify-between mx-auto w-full">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
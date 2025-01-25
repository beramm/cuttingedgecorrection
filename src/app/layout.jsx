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

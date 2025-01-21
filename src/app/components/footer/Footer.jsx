import React from 'react'
import Image from 'next/image';
import { FacebookIcon, InstagramIcon } from '../icon';
import Link from 'next/link';
import ContactUsButton from '../button/ContactUsButton';

const Footer = () => {
  return (
    <div className="w-full min-h-[400px] text-foreground bg-primary relative">
      <div className="max-w-screen-xl m-auto h-full flex flex-col justify-between p-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-y-2 border-foreground py-10 relative">
          {/* Stay Informed Section */}
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold">STAY INFORMED.</h2>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="p-2 bg-primary border-t border-l border-b border-foreground h-8 w-72 text-xs focus:outline-none"
              />
              <button className="bg-accent text-primary hover:bg-highlight hover:text-accent duration-200 px-2 h-8 text-xs font-bold w-28 md:w-24">
                JOIN NOW
              </button>
            </div>
            <div className="mt-8 text-foreground flex flex-col">
              <h2 className="text-xl font-bold">FOLLOW US</h2>
              <div className="flex gap-2 mt-2">
                <Link
                  href={"https://web.facebook.com/CuttingEdgeCorrection"}
                  target="_blank"
                >
                  <FacebookIcon size={40} hexColor={"#E8E6DE"} />
                </Link>
                <Link
                  href={"https://www.instagram.com/cuttingedgecorrection"}
                  target="_blank"
                >
                  <InstagramIcon size={40} hexColor={"#E8E6DE"} />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-center md:grid md:grid-cols-[280px_auto] mt-12 md:mt-0 md:p-2 items-start gap-4 md:gap-2">
            <div>
              <h3 className="text-xs font-light">Email</h3>
              <p className="text-l font-extrabold">
                cuttingedgecorrection@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xs font-light">Phone</h3>
              <p className="text-l font-extrabold">0450 649 257</p>
            </div>
            <div className="row-start-2">
              <h3 className="text-xs font-light">Address</h3>
              <p className="text-l font-extrabold">
                67 Walsgott Street, North Geelong, VIC 3215
              </p>
            </div>
            <div className="row-start-2">
              <h3 className="text-xs font-light">Open 7 Days a Week</h3>
              <p className="hidden md:block text-l font-extrabold">
                Monday to Sunday
                <br />
                07:00 - 06:00 PM
              </p>
              <p className="block md:hidden text-l font-extrabold">
                Monday to Sunday / 07:00 - 06:00 PM
              </p>
            </div>
          </div>

          {/* Logo Section */}
          <div className="relative md:w-auto flex flex-col md:-mt-8 items-center w-full md:max-w-[240px]">
            <Image
              src={"/cec_nocolor_logo.png"}
              width={260}
              height={260}
              alt="CEC"
              unoptimized={true}
            />
            <div className="absolute bottom-0">
              <ContactUsButton borderColor={"#00A2FF"} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-4 font-light text-xs">
          <div className="flex space-x-4">
            <Link href={"/privacy-policy-tos"} className="hover:underline">
              Privacy Policy & TOS
            </Link>
            <Link href={"/faq"} className="hover:underline">
              Frequently Asked Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;

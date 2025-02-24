"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FacebookIcon, InstagramIcon } from '../icon';
import Link from 'next/link';
import ContactUsButton from '../button/ContactUsButton';
import axios from 'axios';
import { Alert, Button } from "@material-tailwind/react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlertType("error");
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);

      // Automatically hide the alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
      return; // Prevent further execution
    }

    try {
      await axios.post("/api/v1/user/register", { email });
      setAlertType("success");
      setAlertMessage("Email Submitted!");
      setShowAlert(true);
      setEmail("");

      // Automatically hide the alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      setAlertType("error");
      setAlertMessage(error.response?.data?.error || "Failed to submit. Please try again.");
      setShowAlert(true);

      // Automatically hide the alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
    }
  };


  return (
    <>
      <Alert
        open={showAlert}
        onClose={() => setShowAlert(false)} // Allows manual closing
        className={`${alertType === "error" ? "bg-red-700" : "bg-green-700"
          } text-white fixed bottom-4 left-4 z-50 shadow-lg max-w-sm`}
        animate={{
          mount: { opacity: 1, transform: "translateY(0)" },
          unmount: { opacity: 0, transform: "translateY(-100%)" },
        }}
      >
        <div className="flex justify-between items-center gap-5">
          <span className="flex-grow text-sm">{alertMessage}</span>
          <Button
            variant="text"
            color="white"
            size="sm"
            onClick={() => setShowAlert(false)} // Manual close button
            className={`${alertType === "error" ? "bg-red-900" : "bg-green-900"
              } hover:opacity-80 transition duration-200`}
          >
            Close
          </Button>
        </div>
      </Alert>

      <div className="w-full min-h-[400px] text-foreground bg-primary relative">
        <div className="max-w-screen-xl m-auto h-full flex flex-col justify-between p-12">
          <div className="flex flex-col md:flex-row justify-between border-y-2 border-foreground py-10 relative">
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold">STAY INFORMED.</h2>
              <form className="flex mt-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="p-2 bg-primary border-t border-l border-b border-foreground h-8 w-72 text-xs focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-accent text-primary hover:bg-highlight hover:text-accent duration-200 px-2 h-8 text-xs font-bold w-28 md:w-24"
                >
                  JOIN NOW
                </button>
              </form>
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

            <div className="flex flex-col justify-center md:grid md:grid-cols-[280px_auto] mt-12 md:mt-0 md:p-2 items-start gap-4 md:gap-2">
              <div>
                <h3 className="text-xs font-light">Email</h3>
                <p className="text-l font-extrabold">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@cecdetailing.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00A2FF]"
                  >
                    info@cecdetailing.com.au
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xs font-light">Phone</h3>
                <p className="text-l font-extrabold">

                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'conversion', {
                          send_to: 'AW-16846417732/cyNXCN_imaIaEMTe_-A-',
                          event_callback: () => (window.location.href = 'tel:0450649257'),
                        });
                      } else {
                        window.location.href = 'tel:0450649257'; // Fallback if gtag isn't loaded
                      }
                    }}
                    href="tel:0450649257"
                    className="hover:text-[#00A2FF] text-l font-extrabold"
                  >
                    0450 649 257
                  </a>

                </p>
              </div>
              <div className="row-start-2">
                <h3 className="text-xs font-light">Address</h3>
                <p className="text-l font-extrabold">
                  <a
                    href="https://www.google.com/maps/place/Cutting+Edge+Correction/@-38.1167031,144.3417704,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad4118fa7bfd889:0x19eba5f83ed455b3!8m2!3d-38.1167031!4d144.3443453!16s%2Fg%2F11pwphknv6?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00A2FF]"
                  >
                    67 Walsgott Street, North Geelong, VIC 3215
                  </a>
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

            <div className="relative md:w-auto flex flex-col md:-mt-8 items-center w-full md:max-w-[240px]">
              <Image
                src={"/cec_nocolor_logo.png"}
                width={260}
                height={260}
                alt="CEC"
              />
              <div className="absolute bottom-0">
                <ContactUsButton borderColor={"#00A2FF"} />
              </div>
            </div>
          </div>

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
    </>
  );
};

export default Footer;

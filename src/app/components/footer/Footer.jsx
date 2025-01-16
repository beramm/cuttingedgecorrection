import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[400px]  text-foreground absolute bottom-0">
      <div className="max-w-screen-xl m-auto h-full flex flex-col justify-between p-10">


        {/* Top Section */}
        <div className="flex justify-between border-t-2 border-b-2 border-foreground py-10 h-[95%]">

          {/* Stay Informed Section */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">STAY INFORMED.</h2>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="p-2 bg-primary border border-foreground h-8 w-72 text-xs"
              />
              <button className="bg-highlight text-primary px-2 h-8 text-xs font-bold">
                JOIN NOW
              </button>
            </div>
            <div className="mt-8 text-foreground flex flex-col">
                <h2>Follow Us</h2>

            </div>
          </div>

         {/* Contact Info Section */}
          <div className="grid grid-cols-2 gap-10 p-2">
            {/* Email */}
            <div>
              <h3 className="text-xs font-light">Email</h3>
              <p className="text-sm font-extrabold">cuttingedgecorrection@gmail.com</p>
            </div>
            {/* Phone */}
            <div>
              <h3 className="text-xs font-light">Phone</h3>
              <p className="text-sm font-extrabold">0450 649 257</p>
            </div>
            {/* Address */}
            <div>
              <h3 className="text-xs font-light">Address</h3>
              <p className="text-sm font-extrabold">67 Walsgott Street, North Geelong, VIC 3215</p>
            </div>
            {/* Open Hours */}
            <div>
              <h3 className="text-xs font-light">Open 7 Days a Week</h3>
              <p className="text-sm font-extrabold">Monday to Sunday<br />07:00 - 06:00 PM</p>
            </div>
          </div>



          {/* Logo Section*/}
          <div className="flex flex-col items-center">
            
            
          </div>


        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-4 font-light text-xs">
          {/* Privacy Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy & TOS
            </a>
            <a href="#" className="hover:underline">
              Frequently Asked Questions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

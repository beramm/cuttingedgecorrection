import ServicesCarousel from "./components/carousels/ServicesCarousel";
import ContactUsButton from "./components/button/ContactUsButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-[550px] w-full bg-white ">
        <div>
          <video
            className="absolute top-0 left-0 right-0 object-contain block mx-auto z-0 min-h-screen w-full "
            src="/videoplayback.webm"
            autoPlay
            loop
            muted
          ></video>
          <div className="h-[750px] absolute top-0 left-0 flex flex-col items-start justify-center text-white pl-10 ml-16">
            <h1 className="text-[60px] font-bold">CUTTING EDGE CORRECTION</h1>
            <div className="w-[550px] mb-8">
              <p>
                At CEC, we provide exceptional car detailing services right here
                in Geelong. Our home-based business ensures personalized care
                and attention to detail, bringing top-tier results that exceed
                your expectations.
              </p>
            </div>
            <ContactUsButton />
          </div>
        </div>

        <div className="w-full h-auto flex flex-col items-center z-10 absolute px-32 top-[700px]">
          <div className="w-full flex flex-row justify-between items-start px-10 mb-16">
            <div className="w-1/2 pr-5">
              <h2 className="text-[35px] font-bold">
                PASSION FOR CARS,
                <br />
                EXCELLENCE IN DETAILING.
              </h2>
              <br />
              <h2 className="text-[35px] font-bold">
                EXPERIENCE THE CUTTING EDGE
              </h2>
            </div>
            <div className="w-1/2 pl-5">
              <p>
                Delivering a 5-star finish is our standard, and we never settle
                for less. Our unwavering dedication means your car&apos;s
                brilliance will stand the test of time.
                <br />
                <br />
                Want to see what all the hype&apos;s about? Tap the button and
                let&apos;s chat.
              </p>
              <br />
              <div className="w-fit">
                <ContactUsButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Transition to Service */}
      <div className="relative w-full h-96">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) ,  rgba(0, 0, 0, 7) ,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))",
          }}
        ></div>
      </div>

      {/** Our Services */}
      <div className="relative w-full bg-black">
        <div className="text-center text-5xl lg:text-[60spx] font-extrabold mb-12">
          <h1>
            OUR{" "}
            <span className="bg-radial-gradient bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>
        </div>
        <ServicesCarousel />
      </div>

      {/** Transition between sections */}
      <div className="w-full h-20 relative -pt-40 bg-black z-20 opacity-80">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(20, 20, 22, 0.6) ,rgba(20, 20, 22, 1))",
          }}
        ></div>
      </div>

      {/** Our Commitment */}
      <div className="relative w-full flex flex-col lg:flex-rowmx-auto z-0 h-[920px] justify-center ">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={"/carbon_background.png"}
            width={1920}
            height={1080}
            alt="bg"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-screen-2xl mx-auto lg: px-0">
          
          {/* Text Side */}
          <div className="flex-1 flex flex-col items-center lg:items-center justify-center py-12 lg:px-20">
            {/* Title */}
            <div className="text-center lg:text-left text-4xl sm:text-5xl lg:text-[60px] font-extrabold mb-4 lg:mb-8">
              <h1>
                OUR{" "}
                <span className="bg-radial-gradient bg-clip-text text-transparent">
                  COMMITMENT
                </span>
              </h1>
            </div>
            {/* Details */}
            <div className="flex flex-col gap-3 lg:gap-6 max-w-lg text-sm sm:text-base px-4 lg:px-0">
              <p>
                At Cutting Edge Correction, we&apos;re not just about
                cars&mdash;we&apos;re about the people of Geelong.
              </p>
              <p>
                We understand that you want your vehicle to look its absolute
                best, and we&apos;re committed to making that happen every
                single time. No shortcuts, no rush jobs&mdash;just high-quality
                results. Whether you&apos;re cruising along the coast or turning
                heads around town, we&apos;ll make sure your car gets the
                attention it deserves.
              </p>
            </div>
            {/* Button */}
            <div className="self-center lg:self-start mt-4 lg:ml-16 w-36">
              <ContactUsButton />
            </div>
            {/* Decorative Bar */}
            <div className="bg-foreground w-[85%] h-2 mt-4 lg:mt-8"></div>
          </div>

          {/* Image Side */}
          <div className="flex-1 mt-6 lg:mt-0 bg-slate-400 lg:items-end">
            <Image
              src={"/our_commitment_image.webp"}
              width={1920}
              height={1080}
              alt="image"
              className="w-full lg:w-[800px] h-[350px] lg:h-[650px] object-cover object-left "
            />
            s
          </div>
        </div>
      </div>

      {/**Testimonials*/}
      {/* <div className="h-[1200px] w-full relative">
        <Image
          src={"/carbon_background.png"}
          width={1920}
          height={1080}
          alt="bg"
          className="h-full w-full object-cover bg-no-repeat z-0 -mt-20"
        />
      </div> */}
    </div>
  );
}

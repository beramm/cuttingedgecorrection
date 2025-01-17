import ServicesCarousel from "./components/caraosels/ServicesCaraosel";
import ContactUsButton from "./components/button/ContactUsButton";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl">

      <div className="h-[800px] w-full">
        <div>
          <video
            className="absolute top-0 left-0 right-0 object-contain block mx-auto z-0"
            src="/videoplayback.webm"
            autoPlay
            loop
            muted
          ></video>
          <div className="h-[750px] absolute top-0 left-0 flex flex-col items-start justify-center text-white pl-10 ml-16">
            <h1 className="text-[60px] font-bold">CUTTING EDGE CORRECTION</h1>
            <div className="w-[550px] mb-8">
              <p>At CEC, we provide exceptional car detailing services right here in Geelong.
                Our home-based business ensures personalized care and attention to detail,
                bringing top-tier results that exceed your expectations.</p>
            </div>
            <ContactUsButton />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center mt-32">
        <div className="w-full flex flex-row justify-between items-start px-10 mb-16">
          <div className="w-1/2 pr-5">
            <h2 className="text-[30px] font-bold">PASSION FOR CARS,<br />EXCELLENCE IN DETAILING.</h2>
            <br />
            <h2 className="text-[30px] font-bold">EXPERIENCE THE CUTTING EDGE</h2>
          </div>
          <div className="w-1/2 pl-5">
            <p>
              Delivering a 5-star finish is our standard, and we never settle for less.
              Our unwavering dedication means your car's brilliance will stand the test of time.
              <br /><br />
              Want to see what all the hype's about?
              Tap the button and let's chat.
            </p>
            <br />
            <div className="w-fit">
              <ContactUsButton />
            </div>
          </div>
        </div>
      </div>


      <div className="w-full  h-[1200px] mt-32">
        <div className="w-full text-center text-5xl font-extrabold mb-12">
          <h1>Our <span className="bg-radial-gradient bg-clip-text text-transparent">Services</span>
          </h1>
        </div>
        <ServicesCarousel />
      </div >


    </div>

  );
}

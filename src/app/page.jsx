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
          <div className="h-[1200px] absolute top-0 left-0 flex flex-col items-start justify-center text-white pl-10">
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
     

      <div className="w-full  h-[1200px] mt-32">
        <div className="w-full text-center text-5xl font-extrabold mb-12">
        <h1>Our <span className="bg-radial-gradient bg-clip-text text-transparent">Services</span>
        </h1>
        </div>
        <ServicesCarousel/>
      </div >


    </div>
  
  );
}

import ServicesCarousel from "./components/caraosels/ServicesCaraosel";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl">

      <div className="h-[800px] w-full">
      <video
        className="absolute top-0 left-0 right-0 object-contain block mx-auto z-0"
        src="/videoplayback.webm"
        autoPlay
        loop
        muted
      ></video>
      </div>
     
      <div className="w-full  h-[1200px] mt-32">
        <div className="w-full text-center text-5xl font-extrabold mb-12">
        <h1>Our <span className="bg-radial-gradient bg-clip-text text-transparent">Services</span>
        </h1>
        </div>

        <ServicesCarousel/>
      </div>
    </div>
  );
}

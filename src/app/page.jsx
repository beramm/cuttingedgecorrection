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
     
      <div className="w-full bg-red-800 h-[1200px]">
        asdsd
      </div>
    </div>
  );
}

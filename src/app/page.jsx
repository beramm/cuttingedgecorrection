export default function Home() {
  return (
    <div className="w-full h-[1200px]">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 right-0 object-contain block mx-auto"
        src="/videoplayback.webm"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

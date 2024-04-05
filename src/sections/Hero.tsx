import cozyCasaVideo from "../assets/video/cozyCasaVideo.mp4";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center gap-10 bg-soft-warm-light"
    >
      <video
        src={cozyCasaVideo}
        autoPlay
        loop
        muted
        className=" inset-0 object-cover h-dvh"
      />
      <div
        className="px-8 pb-8 
      flex flex-col justify-center"
      >
        <h1 className="font-bold text-3xl md:text-7xl">
          Coz<span className="text-pale-red">y</span> Casa
        </h1>
        <p className="font-bold text-xs md:text-sm px-1 py-2">
          Welcome to your cozy casa, where every moment is a celebration of
          tranquility
        </p>
      </div>
    </section>
  );
};

export default Hero;

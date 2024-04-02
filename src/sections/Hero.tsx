import backgroundImg from "../assets/backgroundImg2.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col  justify-center min-h-screen gap-10
      h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className="p-8
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

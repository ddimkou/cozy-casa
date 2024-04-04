import home from "../assets/home.jpg";
import hotel from "../assets/hotel.jpg";
import HText from "../shared/HText";
const Services = () => {
  return (
    <section id="projects" className="bg-soft-warm-light p-8">
      <HText>
        <span className="text-pale-red">P</span>rojects{" "}
      </HText>
      {/* hotel */}
      <div
        className="my-14
      flex flex-col sm:flex-row items-center justify-center gap-8"
      >
        <div>
          <img src={hotel} alt="home" className="h-44 md:h-64 lg:h-72" />
          <p className="text-sm sm:text-md md:text-lg  text-center font-bold">
            Hotel Projects
          </p>
        </div>
        {/* home */}
        <div>
          <div>
            <img src={home} alt="hotel" className="h-44 md:h-64 lg:h-72" />
            <p className="text-sm sm:text-md md:text-lg  text-center font-bold">
              Residence Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

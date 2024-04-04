import home from "../assets/home.jpg";
import hotel from "../assets/hotel.jpg";
import HText from "../shared/HText";
const Services = () => {
  return (
    <section className="bg-soft-warm-light">
      <HText>
        <span className="text-pale-red">P</span>rojects{" "}
      </HText>
      {/* hotel */}
      <div>
        <div>
          <img src={hotel} alt="home" className="h-64" />
        </div>
        <p className="text-lg lg:text-2xl">Hotel Projects</p>
      </div>
      {/* home */}
      <div>
        <div>
          <img src={home} alt="hotel" className="h-64" />
        </div>
        <p className="text-lg lg:text-2xl">Residence Project</p>
      </div>
    </section>
  );
};

export default Services;

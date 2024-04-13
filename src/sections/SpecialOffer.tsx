import { offers, OfferProps } from "../constants";
import HText from "../shared/HText";

const SpecialOffer = () => {
  return (
    <section id="offers" className="p-8 ">
      <HText>
        <span className="text-pale-red">S</span>pecial{" "}
        <span className="text-pale-red">O</span>ffers
      </HText>
      {/* card */}
      <div className="flex justify-around flex-wrap gap-5 my-14">
        {offers.map((offer: OfferProps, index: number) => (
          <div
            key={index}
            className="w-80 h-96 border-2 border-black rounded-md shadow-xl
            hover:bg-soft-warm-light hover:shadow-2xl 
          flex flex-col items-center justify-between"
          >
            <div className="w-full  flex flex-col justify-center ">
              <img
                src={offer.img}
                alt={offer.title}
                className="max-w-full h-28 object-contain"
              />
              <div className="p-4 font-bold text-lg text-center">
                {offer.title}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-4 pb-10 text-sm font-bold text-center ">
                {offer.subtitle}
              </div>
              <button className="mb-2 p-2 w-2/4 rounded-md font-semibold text-white  bg-pale-red transition-colors duration-300 hover:bg-pale-pink hover:text-black mx-auto">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffer;

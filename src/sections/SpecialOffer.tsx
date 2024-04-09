import { offers, OfferProps } from "../constants";
import HText from "../shared/HText";

const SpecialOffer = () => {
  return (
    <section id="offers" className="p-8">
      <HText>
        <span className="text-pale-red">S</span>pecial{" "}
        <span className="text-pale-red">O</span>ffers
      </HText>
      {/* card */}
      <div className="flex justify-around flex-wrap gap-5 my-14 border-2 border-red-500">
        {offers.map((offer: OfferProps, index: number) => (
          <div
            key={index}
            className="w-80 h-96 border-2 border-black rounded-md shadow-xl
          flex flex-col items-center justify-between"
          >
            <div className="w-full bg-soft-warm-light h-14 flex justify-center">
              <img
                src={offer.img}
                alt={offer.title}
                className="max-w-full h-36 object-contain"
              />
            </div>
            <div className="p-4 font-bold text-lg text-center">
              {offer.title}
            </div>
            <div className="p-4 pb-10 text-sm font-bold text-gray-700 text-center">
              {offer.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffer;

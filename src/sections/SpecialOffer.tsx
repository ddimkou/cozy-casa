import { offers, OfferProps } from "../constants";
import HText from "../shared/HText";

const SpecialOffer = () => {
  return (
    <section id="offers" className=" p-8">
      <HText>
        <span className="text-pale-red">S</span>pecial{" "}
        <span className="text-pale-red">O</span>ffers
      </HText>
      {/* card */}
      <div className="flex justify-around flex-wrap gap-5 my-14 border-2 border-red-500">
        {offers.map((offer: OfferProps, index: number) => (
          <div className="w-80 h-96 border-2 border-black" key={index}>
            <div className="w-full bg-soft-warm-light"></div>
            <div className="w-20 rounded-full bg-light-lavender"></div>
            <div>{offer.title}</div>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffer;

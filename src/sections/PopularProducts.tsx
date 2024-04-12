import HText from "../shared/HText";
import { products } from "../constants";
import { useState } from "react";
import {
  StarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const PopularProducts = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const selectedProduct = products[selectedProductIndex];

  const handlePrevProduct = (): void => {
    setSelectedProductIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  const handleNextProduct = (): void => {
    setSelectedProductIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section id="popular" className="p-8">
      <HText>
        <span className="text-pale-red">P</span>opular{" "}
        <span className="text-pale-red">P</span>roducts
      </HText>
      {/* products */}

      <div className="min-h-80 my-14 flex flex-col">
        {/* img */}
        <div className="relative flex justify-center items-center w-full">
          <ArrowLeftIcon
            className="h-10 mx-4 hover:text-pale-red hover:drop-shadow-md cursor-pointer"
            onClick={handlePrevProduct}
          />
          <img src={selectedProduct.imgUrl} alt="" width={600} />
          <ArrowRightIcon
            className="h-10 mx-4 hover:text-pale-red hover:drop-shadow-md cursor-pointer"
            onClick={handleNextProduct}
          />
        </div>
        {/* title */}
        <div className="flex flex-col items-center pb-4">
          <div className="flex items-center gap-2">
            <h3 className=" font-bold text-xl">{selectedProduct.item}</h3>

            <div className="flex items-center gap-0.5">
              <StarIcon className="w-4 h-4 text-yellow-400 " />
              <p className="text-xs">{selectedProduct.stars}</p>
            </div>
          </div>

          <p className="text-base font-normal">{selectedProduct.code}</p>
        </div>
        {/* select */}
        <div className=" flex flex-row items-center justify-center gap-2 flex-wrap">
          {products.map((product, index) => (
            <img
              src={product.imgUrl}
              alt={product.item}
              key={product.item}
              width={80}
              className={`border-2 cursor-pointer ${
                index === selectedProductIndex
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              onClick={() => setSelectedProductIndex(index)}
            />
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

import HText from "../shared/HText";
import { ProductTypes, products } from "../constants";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const PopularProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductTypes>(
    products[0]
  );
  return (
    <section id="popular" className="p-8">
      <HText>
        <span className="text-pale-red">P</span>opular{" "}
        <span className="text-pale-red">P</span>roducts
      </HText>
      {/* products */}

      <div
        className="min-h-80 my-14 border-2 border-red-500
      flex flex-col "
      >
        {/* img */}
        <div className="relative flex justify-center w-full">
          <img src={selectedProduct.imgUrl} alt="" width={600} />
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
          {products.map((product) => (
            <img
              src={product.imgUrl}
              alt={product.item}
              key={product.item}
              width={80}
              className="border-2 border-gray-500 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            />
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

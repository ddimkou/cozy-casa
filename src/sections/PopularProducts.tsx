import HText from "../shared/HText";
import { ProductTypes, products } from "../constants";
import { useState } from "react";

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
        <h3 className="text-center font-bold py-2 text-xl">
          {selectedProduct.item} -{" "}
          <span className="text-base font-normal">{selectedProduct.code}</span>
        </h3>
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
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

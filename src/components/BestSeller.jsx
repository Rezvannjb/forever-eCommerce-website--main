import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((product) => product.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, []);

  return (
    <div className="my-10 font-yekan">
      <div className="text-center text-3xl py-8">
        <Title text1={"پرفروش"} text2={"ترین"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          پرفروش‌ترین محصولات ما که مشتریان ما نمی‌توانند از آن‌ها سیر شوند.
          محبوب‌ترین محصولات فروشگاه ما را خریداری کنید.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((product, idx) => (
          <ProductItem
            key={idx}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

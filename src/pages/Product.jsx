import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { supabase } from "../lib/supabase";

const Product = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [isLoading, setIsloading] = useState(false);
  async function getProduct() {
    try {
      setIsloading(true);
      const { data, error } = await supabase.from("products").select("*");
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  const fetchProductsData = async () => {
    products.map((product) => {
      if (product.id === productId) {
        setProductsData(product);
        setImage(product.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------------------- Producsts Data ----------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------------------- products images ---------------------- */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          {/*---------------------- main img---------------------- */}
          <div className="w-full sm:w-[80%]">
            <img
              src={productsData.image}
              alt="product"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ---------------------- products details ---------------------- */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />

            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productsData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p className="">انتخاب سایز</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`w-8 h-8 border bg-gray-100 flex items-center justify-center cursor-pointer
                  ${item === size ? "border-orange-500" : ""}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productsData.id, size)}
            className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
          >
            افزودن به سبد خرید
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>محصول ۱۰۰٪ اصل</p>
            <p>ارسال رایگان برای سفارشات بالای ۴۹ دلار</p>
            <p>سیاست بازگشت و تعویض آسان در عرض ۷ روز</p>
          </div>
        </div>
      </div>

      {/* ---------------------- Products Description and review section ----------------------*/}

      <div className="mt-10">
        <div className="flex">
          <b className="px-5 py-3 text-sm border">توضیحات</b>
          <p className="px-5 py-3 text-sm border">نظرات (۱۲۲)</p>
        </div>

        <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>
            Ane-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a vietual marketplace where businesses and individuals.com
            showcase ther produch, interact with customers, and conduct
            fransactions without the need for a physical presence. E-commerce
            websites have goned immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with defailed descriptions, images, prices, and any ovalable
            variations (eg, sizes colors). Each product uwaly has its ww
            dedicated page with relevant infurroution
          </p>
        </div>
      </div>

      {/* ----------------------  Display Products  Products ----------------------*/}

      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

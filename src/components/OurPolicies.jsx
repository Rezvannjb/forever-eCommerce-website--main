import { assets } from '../assets/assets';

const OurPolicies = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">سیاست تعویض آسان</p>
        <p className="text-gray-400">ما سیاست تعویض بدون دردسر ارائه می‌دهیم</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">سیاست بازگشت ۷ روزه</p>
        <p className="text-gray-400">ما سیاست بازگشت ۷ روزه ارائه می‌دهیم</p>
      </div>
      <div className="">
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">بهترین پشتیبانی مشتری</p>
        <p className="text-gray-400">ما پشتیبانی مشتری ۲۴/۷ ارائه می‌دهیم</p>
      </div>
    </div>
  );
};

export default OurPolicies;

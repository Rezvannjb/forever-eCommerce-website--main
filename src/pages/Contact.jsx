import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import Title from '../components/Title';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'تماس'} text2={'با ما'} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">فروشگاه ما</p>
          <p className="text-gray-500">
            ۷۲۹۸ کینگ لاج
            <br />
            نورث التون، ایلینویز ۷۸۱۵۴
          </p>

          <p className="text-gray-800">
            تلفن: <span className="text-gray-500">+1 800 123 1234</span>
          </p>
          <p className=" text-gray-800">
            ایمیل: <span className="text-gray-500">admin@forever.com</span>
          </p>

          <p className="text-gray-500">فرصت‌های شغلی در فوراور</p>
          <p className="text-gray-500">
            بیشتر در مورد تیم‌ها و فرصت‌های شغلی ما بدانید.
          </p>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500 "
            onClick={scrollToTop}
          >
            کاوش مشاغل
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;

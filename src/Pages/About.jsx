import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'درباره'} text2={'ما'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            فوراور از شور و اشتیاق برای نوآوری و تمایل به انقلاب در نحوه خرید آنلاین مردم متولد شد. سفر ما با ایده ساده‌ای برای ارائه پلتفرمی آغاز شد که مشتریان بتوانند به راحتی طیف وسیعی از محصولات را از راحتی خانه‌هایشان کشف، کاوش و خریداری کنند.
          </p>
          <p>
            از زمان تأسیس، ما بی‌وقفه کار کرده‌ایم تا مجموعه متنوعی از محصولات باکیفیت بالا را گردآوری کنیم که به هر سلیقه و ترجیحی پاسخ دهد. از مد و زیبایی گرفته تا الکترونیک و لوازم ضروری خانه، ما مجموعه گسترده‌ای از برندها و تأمین‌کنندگان مورد اعتماد ارائه می‌دهیم.
          </p>
          <b className="text-gray-800">ماموریت ما</b>
          <p>
            {' '}
            ماموریت فوراور این است که مشتریان را با انتخاب، راحتی و اعتماد به نفس توانمند سازد. ما متعهد به ارائه تجربه خرید بی‌نقصی هستیم که از انتظارات فراتر رود، از مرور و سفارش تا تحویل و فراتر از آن.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'چرا'} text2={'ما را انتخاب کنید'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>ضمانت کیفیت</b>
          <p className="text-gray-600">
            ما افتخار می‌کنیم که فقط محصولات با بالاترین کیفیت را ارائه می‌دهیم که استانداردهای سختگیرانه ما را برای دوام، عملکرد و ارزش برآورده می‌کنند.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>راحتی</b>
          <p className="text-gray-600">
            وب‌سایت و اپلیکیشن موبایل کاربرپسند ما مرور، مقایسه و خرید محصولات در حال حرکت را آسان می‌کند.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>خدمات مشتری استثنایی</b>
          <p className="text-gray-600">
            تیم متخصص نمایندگان خدمات مشتری ما ۲۴ ساعته در دسترس است تا در هر سوال یا نگرانی که ممکن است داشته باشید به شما کمک کند.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;

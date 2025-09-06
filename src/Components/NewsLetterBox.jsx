const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('با موفقیت مشترک شدید!');
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        همین الان مشترک شوید و ۲۰٪ تخفیف بگیرید
      </p>
      <p className="text-gray-500 mt-3">
        اولین کسی باشید که از محصولات جدید، فروش‌ها و پیشنهادات ویژه مطلع می‌شوید!
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="w-full sm:flex-1 outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          مشترک شوید
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

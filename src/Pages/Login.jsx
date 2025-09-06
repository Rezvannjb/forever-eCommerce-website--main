import { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('ثبت نام');

  const onSubmmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text 3x1"> {currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>

      <div className="w-full px-3 py-2 flex flex-col gap-4">
        {currentState === 'ثبت نام' ? (
          <input
            type="text"
            className="w-Full px-3 py-2 border border-gray-880"
            placeholder="نام"
            required
          />
        ) : null}

        <input
          type="email"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="ایمیل"
          required
        />
        <input
          type="password"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="رمز عبور"
          required
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className=" cursor-pointer">رمز عبور را فراموش کرده‌اید؟</p>
          {currentState === 'ورود' ? (
            <p
              onClick={() => setCurrentState('ثبت نام')}
              className="cursor-pointer"
            >
              ایجاد حساب
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('ورود')}
              className="cursor-pointer"
            >
              اینجا وارد شوید
            </p>
          )}
        </div>
        <button className="w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 ">
          {currentState === 'ورود' ? 'ورود' : 'ثبت نام'}
        </button>
      </div>
    </form>
  );
};

export default Login;

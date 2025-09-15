import { useState } from "react";
import { SignInByEmail, SignUpByEmail } from "../helpers/Auth";
import { toast } from "react-toastify";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmmitHandler = async (e) => {

    e.preventDefault();

    if (currentState === "login") {
      const { sucsess } = await SignInByEmail(email, password);
      if (sucsess) {
        toast.success("ورود موفقیت‌آمیز بود");

        // ببینیم از کجا اومده
        const from = location.state?.from?.pathname || "/";

        navigate(from, { replace: true });
      } else {
        toast.error("مشکلی در ورود رخ داد");
      }
    } else {
      const { sucsess } = await SignUpByEmail(email, password);
      sucsess
        ? toast.success("ثبت نام انجام شد لطفا وارد شوید")
        : toast.error("مشکلی در ثبت نام رخ داد");
    }
    <Navigate to={"/cart"} replace />;
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
        {currentState === "signUp" ? (
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="رمز عبور"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className=" cursor-pointer">رمز عبور را فراموش کرده‌اید؟</p>
          {currentState === "login" ? (
            <p
              onClick={() => setCurrentState("signUp")}
              className="cursor-pointer"
            >
              ایجاد حساب
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("login")}
              className="cursor-pointer"
            >
              اینجا وارد شوید
            </p>
          )}
        </div>
        <button className="w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 ">
          {currentState === "login" ? "ورود" : "ثبت نام"}
        </button>
      </div>
    </form>
  );
};

export default Login;

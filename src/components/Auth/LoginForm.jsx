import React, { useContext, useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/authContext";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      setUser(true);
      Cookies.set("user", JSON.stringify(values));
      resetForm();
    },
  });
  return (
    <div
      className={`w-full min-h-screen relative flex items-center justify-end p-4 md:p-10`}
      style={{
        backgroundImage: `url('/signup-mockup.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "30px",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="min-h-[90vh] w-full lg:w-1/2 rounded-[30px] bg-[#FFFFFFA6] p-4 md:p-8 xl:p-12 flex flex-col items-start justify-center gap-4"
      >
        <h2 className={`blue-text text-[36px] font-bold`}>
          Welcome To Markettoll!
        </h2>
        <p className="text-base font-medium">
          Where every need finds its perfect match
        </p>

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="email" className="text-[14px] font-medium">
            Email
          </label>
          <div className="bg-[#fff] rounded-[20px] w-full flex items-center justify-start gap-3 p-4">
            <img
              src="/mail-icon.png"
              alt="mail-icon.png"
              className="w-[17.95px] h-[15.34px]"
            />
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="johnsmith@gmail.com"
              className="w-full bg-transparent text-[14px] font-[400] text-[#5C5C5C] outline-none"
            />
          </div>
          {formik.errors.email ? (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="phone" className="text-[14px] font-medium">
            Password
          </label>

          <div className="bg-[#fff] rounded-[20px] w-full flex items-center justify-start gap-3 p-4">
            <img
              src="/password-icon.png"
              alt="password-icon"
              className="w-[18px] h-[18px]"
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter Password"
              className="w-full bg-transparent text-[14px] font-[400] text-[#5C5C5C] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <LuEye className="text-[#606060]" />
              ) : (
                <LuEyeOff className="text-[#606060]" />
              )}
            </button>
          </div>
          {formik.errors.password ? (
            <div className="text-xs text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="text-end w-full">
          <Link
            to="/forgot-password"
            className="text-[14px] font-medium text-end"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="blue-bg text-white rounded-[20px] text-base font-bold py-3.5 w-full"
        >
          Log In
        </button>

        <p className="text-center text-xs text-[#8B8B8B] mx-auto mt-2">OR</p>

        <div className="w-full flex items-center justify-between">
          <button
            type="button"
            className="bg-white w-[85px] xl:w-[166px] h-[50px] rounded-[20px] flex items-center justify-center"
          >
            <img
              src="/google-icon.png"
              alt="google icon"
              className="w-[22px] h-[22px]"
            />
          </button>
          <button
            type="button"
            className="bg-white w-[85px] xl:w-[166px] h-[50px] rounded-[20px] flex items-center justify-center"
          >
            <img
              src="/apple-icon.png"
              alt="google icon"
              className="w-[18px] h-[22px]"
            />
          </button>
          <button
            type="button"
            className="bg-white w-[85px] xl:w-[166px] h-[50px] rounded-[20px] flex items-center justify-center"
          >
            <img
              src="/facebook-icon.png"
              alt="google icon"
              className="w-[22px] h-[22px]"
            />
          </button>
        </div>

        <p className="text-sm text-center w-full mt-4">
          <span>Don't Have An Account? </span>
          <Link to="/sign-up" className="light-blue-text font-bold">
            Create One
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

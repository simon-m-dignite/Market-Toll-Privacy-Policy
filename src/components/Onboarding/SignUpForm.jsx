import React, { useContext, useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/authContext";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 25) {
    errors.name = "Must be 25 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length > 10 || values.phone.length < 10) {
    errors.phone = "Must be 10 digits";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { user, signUpData, setSignUpData } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      setSignUpData(values);
      navigate("/review-profile");
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
        className="min-h-[100%] w-full lg:w-1/2 rounded-[30px] bg-[#FFFFFFA6] p-4 md:p-8 flex flex-col items-start justify-between gap-3"
      >
        <h2 className={`blue-text text-[36px] font-bold`}>Sign Up</h2>
        <p className="text-base font-medium">
          Enter the below details to sign up
        </p>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="name" className="text-[14px] font-medium">
            Name
          </label>
          <div className="bg-[#fff] rounded-[20px] w-full flex items-center justify-start gap-3 p-4">
            <img
              src="/profile-icon.png"
              alt="profile-icon"
              className="w-[14.95px] h-[16.34px]"
            />
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="John Smith"
              className="w-full bg-transparent text-[14px] font-[400] text-[#5C5C5C] outline-none"
            />
          </div>
          {formik.errors.name ? (
            <div className="text-xs text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

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
            Phone Number
          </label>
          <div className="bg-[#fff] rounded-[20px] w-full flex items-center justify-start gap-3 p-4">
            <img
              src="/phone-icon.png"
              alt="phone-icon"
              className="w-[17.95px] h-[15.34px]"
            />
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="+1 123 456 7890"
              className="w-full bg-transparent text-[14px] font-[400] text-[#5C5C5C] outline-none"
            />
          </div>
          {formik.errors.phone ? (
            <div className="text-xs text-red-500">{formik.errors.phone}</div>
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

        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="confirmPassword" className="text-[14px] font-medium">
            Confirm Password
          </label>

          <div className="bg-[#fff] rounded-[20px] w-full flex items-center justify-start gap-3 p-4">
            <img
              src="/password-icon.png"
              alt="password-icon"
              className="w-[18px] h-[18px]"
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Enter Password"
              className="w-full bg-transparent text-[14px] font-[400] text-[#5C5C5C] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showPassword ? (
                <LuEye className="text-[#606060]" />
              ) : (
                <LuEyeOff className="text-[#606060]" />
              )}
            </button>
          </div>
          {formik.errors.confirmPassword ? (
            <div className="text-xs text-red-500">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="blue-bg text-white rounded-[20px] text-base font-bold py-3.5 w-full mt-4"
        >
          Sign Up
        </button>

        <p className="text-sm text-center w-full">
          <span>Already Have An Account? </span>
          <Link to="/login" className="light-blue-text font-bold">
            Login
          </Link>
        </p>

        <p className="text-sm text-center w-full">
          <span>By registering, you accept our </span>
          <Link
            to="/terms-and-conditions"
            className="light-blue-text font-bold"
          >
            Terms & conditions
          </Link>
          <span> & </span>
          <Link to="/privacy-policy" className="light-blue-text font-bold">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

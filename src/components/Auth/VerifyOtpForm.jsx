import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaArrowLeftLong } from "react-icons/fa6";

const validate = (values) => {
  const errors = {};

  if (!values.otp) {
    errors.otp = "Required";
  } else if (values.otp.length < 6) {
    errors.otp = "Please enter OTP";
  }

  return errors;
};

const VerifyOtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPage = location.state?.from || "/";

  const handleNavigateToBack = () => {
    if (previousPage === "verify-otp") {
      navigate("/forgot-password");
    } else if (previousPage === "review-profile") {
      navigate("/review-profile");
    } else if (previousPage === "forgot-password") {
      navigate("/forgot-password");
    } else {
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    // validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      // navigate("/update-password");
      if (previousPage === "verify-otp") {
        navigate("/forgot-password");
      } else if (previousPage === "review-profile") {
        navigate("/review-profile");
      } else if (previousPage === "forgot-password") {
        navigate("/forgot-password");
      } else {
        navigate("/");
      }
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
        className="min-h-[90vh] w-full lg:w-1/2 rounded-[30px] bg-[#FFFFFFA6] p-4 md:p-8 xl:p-12 flex flex-col items-start justify-center gap-4 relative"
      >
        <button
          type="button"
          onClick={handleNavigateToBack}
          className="absolute top-5 left-4 md:left-8"
        >
          <img
            src="/left-arrow-icon.png"
            alt="left arrow icon"
            className="w-[35px]"
          />
        </button>
        <h2 className={`blue-text text-[36px] font-bold`}>Verification</h2>
        <p className="text-base font-medium lg:w-[90%]">
          Please enter the code that we sent to your email johnsmith@gmail.com
          to reset your password.
        </p>

        <div className="w-full flex flex-col items-start gap-1 mt-2">
          <div className=" rounded-[20px] w-full flex items-center justify-between gap-3">
            <input
              type="number"
              className="bg-[#fff] outline-none w-[60.5px] h-[60.5px] p-4 rounded-[20px] text-center blue-text text-[36px] font-bold"
            />
            <input
              type="number"
              className="bg-[#fff] outline-none w-[60.5px] h-[60.5px] p-4 rounded-[20px] text-center blue-text text-[36px] font-bold"
            />
            <input
              type="number"
              className="bg-[#fff] outline-none w-[60.5px] h-[60.5px] p-4 rounded-[20px] text-center blue-text text-[36px] font-bold"
            />
            <input
              type="number"
              className="bg-[#fff] outline-none w-[60.5px] h-[60.5px] p-4 rounded-[20px] text-center blue-text text-[36px] font-bold"
            />
            <input
              type="number"
              className="bg-[#fff] outline-none w-[60.5px] h-[60.5px] p-4 rounded-[20px] text-center blue-text text-[36px] font-bold"
            />
            <input
              type="number"
              className="bg-[#fff] outline-none w-[60.5px] h-[60.5px] p-4 rounded-[20px] text-center blue-text text-[36px] font-bold"
            />
          </div>
          {formik.errors.email ? (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="w-full text-sm flex items-center gap-2">
          <p>Don’t Receive the Code? </p>
          <button className="light-blue-text font-bold">Resend Now</button>
        </div>

        <button
          type="submit"
          className="blue-bg text-white rounded-[20px] text-base font-bold py-3.5 w-full"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtpForm;

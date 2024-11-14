import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const ReviewProfileForm = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate("/verify-otp");
    navigate("/verify-otp", { state: { from: "review-profile" } });
  };

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
      <div className="min-h-[100%] w-full lg:w-1/2 rounded-[30px] bg-[#FFFFFFA6] p-4 md:p-8 xl:p-12 flex flex-col items-start justify-between">
        <h2 className={`blue-text text-[36px] font-bold`}>Verification</h2>
        <p className="text-base font-medium">
          Verify your email and phone number
        </p>

        <button
          type="button"
          onClick={handleNavigate}
          className="w-full flex items-center gap-5 my-5 bg-white rounded-[20px] p-4"
        >
          <div className="rounded-[20px] blue-bg flex items-center justify-center w-[80px] h-[80px]">
            <MdEmail className="text-white w-[37px] h-[37px]" />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="text-[18px] font-bold">John Smith</h3>
            <p className="text-sm text-[#5C5C5C]">johnsmith@gmail.com</p>
          </div>
        </button>

        <button
          type="button"
          onClick={handleNavigate}
          className="w-full flex items-center gap-5 mb-7 bg-white rounded-[20px] p-4"
        >
          <div className="rounded-[20px] blue-bg flex items-center justify-center w-[80px] h-[80px]">
            <img
              src="/verify-phone-icon.png"
              alt="verify-phone-icon"
              className="w-[38px] h-[40px]"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="text-[18px] font-bold">Phone Number</h3>
            <p className="text-sm text-[#5C5C5C]">+1 123 456 7980</p>
          </div>
        </button>

        <button
          type="submit"
          onClick={() => navigate("/subscriptions")}
          className="blue-bg text-white rounded-[20px] text-base font-bold py-3.5 w-full mb-7"
        >
          Next
        </button>

        <p className="text-sm text-center w-full mb-3">
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
      </div>
    </div>
  );
};

export default ReviewProfileForm;

const AccountVerified = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 600);

    return () => {};
  }, []);

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
      <div className="min-h-[90vh] w-full lg:w-1/2 rounded-[30px] bg-[#FFFFFFA6] p-4 md:p-8 flex flex-col items-center justify-center gap-4 relative text-center">
        <img
          src="/password-update.png"
          alt="password-update"
          className="w-[79.1px] h-[83.59px]"
        />
        <h2 className={`blue-text text-[36px] font-bold`}>Account Verified</h2>
        <p className="text-base font-medium lg:w-[80%]">
          Your password has been Verified successfully!
        </p>
      </div>
    </div>
  );
};

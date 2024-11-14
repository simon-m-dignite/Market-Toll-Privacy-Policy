import React from "react";
// import { SUBSCRIPTION_PLANS } from "../../constants/subscriptions";
import ServiceBoostPackageCard from "../AddService/ServiceBoostPackageCard";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const SUBSCRIPTION_PLANS = [
  {
    title: "18",
    duration: "7 days",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit ame",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit ",
    ],
  },
  {
    title: "22",
    duration: "14 days",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit ame",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit ",
    ],
  },
  {
    title: "30",
    duration: "Monthly",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit ame",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit ",
    ],
  },
];

const Subscriptions = () => {
  const features = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit ame",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit ",
  ];
  return (
    <div className="rounded-2xl p-5 bg-[#F7F7F7]">
      <div className="w-full p-6 bg-white rounded-2xl">
        <Link to="/" className="flex items-center justify-start gap-1">
          <GoArrowLeft className="light-blue-text text-xl" />
          <span className="text-sm font-medium text-[#5c5c5c]">Back</span>
        </Link>
        <h2 className="blue-text font-bold text-[28px] text-center">
          Subscriptions
        </h2>

        <div className="w-full mt-8 flex items-center justify-center gap-6">
          <div
            className={`border relative rounded-[30px] p-6 lg:p-5 flex flex-col w-full lg:w-[366px] blue-bg`}
          >
            <div className="w-full absolute top-3 right-3">
              <span
                className={`bg-white light-blue-text px-6 lg:px-10 py-2.5 rounded-full text-center font-medium text-sm float-end`}
              >
                Plan 0
              </span>
            </div>
            <h3 className={`mt-7 text-white font-bold`}>
              <span className={`mx-1 text-[52px]`}>Free Plan</span>
            </h3>
            <ul className={`bg-white p-4 rounded-xl`}>
              {features.map((p, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center w-full gap-2 my-3"
                  >
                    <div className="w-[17px] h-[17px] blue-bg p-0.5 rounded-full block">
                      <FaCheck className="text-white w-full h-full" />
                    </div>

                    <span className="text-sm">{p}</span>
                  </li>
                );
              })}

              <Link
                to={"/account/subscriptions/upgrade-plan/add-payment-details"}
                className={`blue-bg text-white font-bold text-center py-3.5 mt-5 rounded-[20px] w-full block`}
              >
                Subscribe Now
              </Link>
            </ul>
          </div>
          {SUBSCRIPTION_PLANS.map((p, index) => {
            return (
              <div
                className={`border relative rounded-[30px] p-6 lg:p-5 flex flex-col w-full lg:w-[366px] ${
                  index == 0 && "blue-bg"
                }`}
              >
                <div className="w-full absolute top-3 right-3">
                  <span
                    className={`${
                      index == 0 ? "bg-white" : "blue-bg text-white"
                    } px-6 lg:px-10 py-2.5 rounded-full text-center font-medium text-sm float-end`}
                  >
                    Plan {index + 1}
                  </span>
                </div>
                <h3
                  className={`mt-7 ${
                    index == 0 ? "text-white" : "blue-text"
                  } font-bold`}
                >
                  {p?.title !== "Free Plan" && (
                    <span className="text-[22px] relative -top-5">$</span>
                  )}
                  <span
                    className={`mx-1 ${
                      p.title === "Free Plan" ? "text-[52px]" : "text-[69px]"
                    }`}
                  >
                    {p.title}
                  </span>
                  {p?.title !== "Free Plan" && (
                    <span className="text-[22px]">/ {p?.duration}</span>
                  )}
                </h3>
                <ul
                  className={`${index == 0 && "bg-white p-4 rounded-xl"} p-4`}
                >
                  {p.features?.map((p, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center w-full gap-2 my-3"
                      >
                        <div className="w-[17px] h-[17px] blue-bg p-0.5 rounded-full block">
                          <FaCheck className="text-white w-full h-full" />
                        </div>

                        <span className="text-sm">{p}</span>
                      </li>
                    );
                  })}
                  <Link
                    to={
                      "/account/subscriptions/upgrade-plan/add-payment-details"
                    }
                    className={`blue-bg text-white font-bold text-center py-3.5 mt-5 rounded-[20px] w-full block`}
                  >
                    Subscribe Now
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

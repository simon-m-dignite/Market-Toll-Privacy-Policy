import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PackageCard = ({ index, title, features, duration }) => {
  return (
    <div className="border rounded-[30px] p-6 flex flex-col gap-1">
      <div className="w-full">
        <span className="blue-bg px-6 lg:px-10 py-2.5 rounded-full text-center text-white font-medium text-sm float-end">
          Plan {index + 1}
        </span>
      </div>
      <h3 className="blue-text font-bold text-[52px]">
        {index == 0 ? (
          "Free Plan"
        ) : (
          <>
            <span className="text-[22px] relative -top-5">$</span>
            <span className="mx-1">{title}</span>
            <span className="text-[22px]">/ {duration}</span>
          </>
        )}
      </h3>
      <ul>
        {features?.map((p, index) => {
          return (
            <li key={index} className="flex items-center w-full gap-2 mt-3.5">
              <div className="w-[17px] h-[17px] blue-bg p-0.5 rounded-full block">
                <FaCheck className="text-white w-full h-full" />
              </div>

              <span>{p}</span>
            </li>
          );
        })}
      </ul>

      <Link
        to={
          index == 0 ? "/profile-setup" : "/subscriptions/add-payment-details"
        }
        className="blue-bg text-white font-bold text-center py-3.5 mt-5 rounded-[20px]"
      >
        Subscribe Now
      </Link>
    </div>
  );
};

export default PackageCard;

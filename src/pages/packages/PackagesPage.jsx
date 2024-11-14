import React from "react";
import PackageCard from "../../components/Packages/PackageCard";
import { SUBSCRIPTION_PLANS } from "../../constants/subscriptions";

const PackagesPage = () => {
  return (
    <div className="padding-x py-6 w-full">
      <div className="text-center">
        <h2 className="blue-text text-[36px] font-bold">Select Your Package</h2>
        <p className="text-[#5C5C5C] text-base font-medium lg:w-2/3 mx-auto mt-2">
          Welcome to Markettoll, where your journey towards success begins!
          Select the subscription plan that suits your needs and dive into a
          world of endless possibilities.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {SUBSCRIPTION_PLANS.map((p, index) => {
          return (
            <PackageCard
              key={index}
              index={index}
              title={p.title}
              features={p.features}
              duration={p.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PackagesPage;

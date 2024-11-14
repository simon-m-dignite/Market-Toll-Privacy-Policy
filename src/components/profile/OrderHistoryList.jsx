import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderHistoryList = () => {
  const [state, setState] = useState(false);
  const handleToggleState = () => {
    setState(!state);
  };

  return (
    <div className="w-full p-5 bg-[#F7F7F7] rounded-[20px]">
      <div className="w-full bg-white rounded-[20px] p-5 lg:p-6">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="blue-text font-bold text-[28px]">Order History</h2>
          <div className="flex">
            <button
              type="button"
              onClick={handleToggleState}
              className={`${
                state ? "bg-[#F7F7F7] text-black" : "blue-bg text-white"
              } px-3 py-3 rounded-l-xl text-xs md:text-sm font-bold`}
            >
              Orders Placed
            </button>
            <button
              type="button"
              onClick={handleToggleState}
              className={`${
                !state ? "bg-[#F7F7F7] text-black" : "blue-bg text-white"
              } px-3 py-3 rounded-r-xl text-xs md:text-sm font-bold`}
            >
              Orders Received
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-start gap-2 mt-4">
          <button
            type="button"
            className="blue-bg text-white rounded-xl px-4 py-2.5 text-sm font-semibold"
          >
            Current
          </button>
          <button
            type="button"
            className="bg-[#F7F7F7] text-black rounded-xl px-6 py-2.5 text-sm font-semibold"
          >
            Past
          </button>
        </div>

        <div className="w-full">
          <div className="w-full flex items-center justify-between border-b py-3 mt-2">
            <p className="font-bold text-base">Order ID # 5649</p>
            <Link
              to="/order-history/order-details/123456"
              className="font-bold text-xs md:text-sm"
            >
              View Product Details
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 py-3 border-b">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/product-img-1.png"
                alt="product-img"
                className="w-[80px] h-[80px] rounded-xl"
              />
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-sm md:text-base font-semibold">
                  Product name here
                </span>
                <span className="text-xs md:text-sm text-[#9D9D9DDD]">
                  Pick/Delivery
                </span>
                <div className="lg:hidden flex items-center justify-center gap-1">
                  <span className="text-sm text-[#9D9D9DDD]">Price</span>
                  <span className="text-sm blue-text font-semibold pl-10">
                    $199.00
                  </span>
                </div>
                <Link
                  to="/orders/1231"
                  className="text-xs font-semibold md:hidden"
                >
                  View Product Details
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center gap-1">
              <span className="text-sm text-[#9D9D9DDD]">Price</span>
              <span className="text-xl blue-text font-semibold pl-10">
                $199.00
              </span>
            </div>

            <div className="hidden text-end lg:flex items-center justify-end">
              <Link to="/products/123245" className="font-bold text-sm">
                View Product Details
              </Link>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 py-3 border-b">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/product-img-1.png"
                alt="product-img"
                className="w-[80px] h-[80px] rounded-xl"
              />
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-sm md:text-base font-semibold">
                  Product name here
                </span>
                <span className="text-xs md:text-sm text-[#9D9D9DDD]">
                  Pick/Delivery
                </span>
                <div className="lg:hidden flex items-center justify-center gap-1">
                  <span className="text-sm text-[#9D9D9DDD]">Price</span>
                  <span className="text-sm blue-text font-semibold pl-10">
                    $199.00
                  </span>
                </div>
                <Link
                  to="/orders/1231"
                  className="text-xs font-semibold md:hidden"
                >
                  View Product Details
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center gap-1">
              <span className="text-sm text-[#9D9D9DDD]">Price</span>
              <span className="text-xl blue-text font-semibold pl-10">
                $199.00
              </span>
            </div>

            <div className="hidden text-end lg:flex items-center justify-end">
              <Link to="/products/123245" className="font-bold text-sm">
                View Product Details
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex items-center justify-between border-b py-3 mt-2">
            <p className="font-bold text-base">Order ID # 5649</p>
            <Link
              to="/order-history/order-details/123456"
              className="font-bold text-xs md:text-sm"
            >
              View Product Details
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 py-3 border-b">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/product-img-1.png"
                alt="product-img"
                className="w-[80px] h-[80px] rounded-xl"
              />
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-sm md:text-base font-semibold">
                  Product name here
                </span>
                <span className="text-xs md:text-sm text-[#9D9D9DDD]">
                  Pick/Delivery
                </span>
                <div className="lg:hidden flex items-center justify-center gap-1">
                  <span className="text-sm text-[#9D9D9DDD]">Price</span>
                  <span className="text-sm blue-text font-semibold pl-10">
                    $199.00
                  </span>
                </div>
                <Link
                  to="/orders/1231"
                  className="text-xs font-semibold md:hidden"
                >
                  View Product Details
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center gap-1">
              <span className="text-sm text-[#9D9D9DDD]">Price</span>
              <span className="text-xl blue-text font-semibold pl-10">
                $199.00
              </span>
            </div>

            <div className="hidden text-end lg:flex items-center justify-end">
              <Link to="/products/123245" className="font-bold text-sm">
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryList;

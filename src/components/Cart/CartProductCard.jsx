import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="border-t py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/product-1.png"
          alt="product image"
          className="w-[80px] h-[80px] rounded-[15px]"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <span className="text-base font-semibold">Product name here</span>
          <span className="text-sm font-normal text-[#9D9D9DDD]">
            Pick/Delivery
          </span>
          <span className="font-semibold text-[16px] blue-text">$199.00</span>
          <div className="md:hidden">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setQuantity(quantity - 1)}
                className="py-1 px-2 rounded-l-[10px] text-center blue-bg"
              >
                <FaMinus className="text-sm text-white" />
              </button>
              <button
                type="button"
                disabled
                className="py-[0.5px] px-5 w-full border-t border-b text-center bg-white text-black text-[13px] font-medium cursor-default"
              >
                {quantity}
              </button>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="py-1 px-2 rounded-r-[10px] text-center blue-bg"
              >
                <FaPlus className="text-sm text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col items-start gap-1 hidden">
        <span className="text-[#9D9D9DDD] text-sm">Price</span>
        <span className="font-semibold text-[20px] blue-text">$199.00</span>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => setQuantity(quantity - 1)}
            className="py-3.5 px-6 rounded-l-[20px] text-center blue-bg"
          >
            <FaMinus className="text-lg text-white" />
          </button>
          <button
            type="button"
            disabled
            className="py-[9px] px-10 w-full border-t border-b text-center bg-white text-black text-[18px] font-medium cursor-default"
          >
            {quantity}
          </button>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="py-3.5 px-6 rounded-r-[20px] text-center blue-bg"
          >
            <FaPlus className="text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;

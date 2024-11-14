import React from "react";
import { Link } from "react-router-dom";

const ProductReviewPage = () => {
  return (
    <div className="padding-x w-full">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 rounded-[30px] bg-[#F7F7F7]">
        <div className="w-full flex flex-col lg:flex-row justify-start gap-x-8 gap-y-6">
          <div className="w-full">
            <img
              src="/product-img-1.png"
              alt="product image"
              className="w-full h-auto lg:h-[336px]"
            />
            <div className="w-full grid grid-cols-4 mt-3 gap-3">
              <img src="/product-img-1.png" alt="" className="rounded-xl" />
              <img src="/product-img-1.png" alt="" className="rounded-xl" />
              <img src="/product-img-1.png" alt="" className="rounded-xl" />
              <img src="/product-img-1.png" alt="" className="rounded-xl" />
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-5">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <h2 className="text-[20px] blue-text font-bold">
                Microsoft xbox series x 1TB
              </h2>
              <h3 className="text-[24px] font-bold">$199.00</h3>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="grid grid-cols-2 gap-y-3">
                <p className="text-[13px] text-[#7C7C7C] font-medium">City</p>
                <p className="text-[13px] font-medium">Toronto</p>
                <p className="text-[13px] text-[#7C7C7C] font-medium">
                  Category
                </p>
                <p className="text-[13px] font-medium">
                  Electronic & Accessories
                </p>
              </div>
              <div className="grid grid-cols-2 gap-y-3">
                <p className="text-[13px] text-[#7C7C7C] font-medium">State</p>
                <p className="text-[13px] font-medium">Canada</p>
                <p className="text-[13px] text-[#7C7C7C] font-medium">
                  Sub Category
                </p>
                <p className="text-[13px] font-medium">Gaming</p>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[13px] text-[#7C7C7C] font-medium mb-3">
                Pickup Address
              </p>
              <p className="text-[13px] font-medium">
                52692 S Railroad Street, Lesterchester 80135-2696
              </p>
            </div>

            <div className="w-full">
              <p className="text-[16px] text-[#003DAC] font-bold mb-3">
                Description
              </p>
              <p className="text-[14px] font-normal">
                Xbox Series X is Microsoft's flagship gaming console, offering
                unparalleled performance and speed. With its powerful AMD Zen 2
                processor and RDNA 2 graphics architecture, it delivers stunning
                4K visuals and supports up to 120 frames per second. The Series
                X features a 1TB SSD for rapid load times and seamless gameplay,
                while its backward compatibility allows access to a vast library
                of Xbox One, Xbox 360, and original Xbox games. Its sleek,
                minimalist design and advanced cooling system ensure optimal
                performance and quiet operation. Additionally, the console
                supports ray tracing, Dolby Vision, and Dolby Atmos for an
                immersive gaming experience
              </p>
            </div>

            <div className="w-full flex items-center gap-3">
              <p className="text-[13px] text-[#7C7C7C] font-medium">
                Available Quantity:
              </p>
              <p className="text-[13px] font-medium">5</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link
            to="/add-product"
            className="bg-white light-blue-text py-3 text-center rounded-full w-full text-sm font-bold"
          >
            Back
          </Link>
          <button
            type="button"
            className="blue-bg text-white py-3 text-center rounded-full w-full text-sm font-bold"
          >
            Post Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewPage;

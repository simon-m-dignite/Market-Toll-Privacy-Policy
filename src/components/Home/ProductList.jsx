import React, { useState } from "react";
import ProductCard from "../Global/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import ServiceCard from "../Global/ServiceCard";

const ProductList = () => {
  const [showServices, setShowServices] = useState(false);
  const navigate = useNavigate();

  const handleShowServices = (category) => {
    if (category == "services") {
      setShowServices(true);
    } else {
      setShowServices(false);
    }
  };

  const handleNavigate = () => {
    navigate("/categories/consoles", { state: { from: "/" } });
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mt-6">
        {!showServices && (
          <div className="flex items-center gap-2 category-buttons flex-wrap">
            <button
              type="button"
              className="blue-bg text-white text-[13px] font-medium rounded-lg px-3 py-2"
            >
              All
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] text-black text-[13px] font-medium rounded-lg px-3 py-2"
            >
              Electronic
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] text-black text-[13px] font-medium rounded-lg px-3 py-2"
            >
              Home Appliances
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] text-black text-[13px] font-medium rounded-lg px-3 py-2"
            >
              Home Decor & Interiors
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] text-black text-[13px] font-medium rounded-lg px-3 py-2"
            >
              Phone & Tablet
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] text-black text-[13px] font-medium rounded-lg px-3 py-2"
            >
              Clothing
            </button>
            <Link
              to="/categories"
              className="bg-[#F7F7F7] text-black text-[13px] font-medium rounded-lg px-3 py-2"
            >
              See All
            </Link>
          </div>
        )}
        {showServices && <div></div>}
        <div className="hidden lg:flex items-center justify-end">
          <button
            type="button"
            onClick={() => handleShowServices("products")}
            className={`py-3 ${
              !showServices ? "blue-bg text-white" : "bg-[#F7F7F7] text-black"
            } text-base font-bold px-5 rounded-l-2xl`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => handleShowServices("services")}
            className={`py-3 ${
              showServices ? "blue-bg text-white" : "bg-[#F7F7F7] text-black"
            } text-base font-bold px-5 rounded-r-2xl`}
          >
            Services
          </button>
        </div>
      </div>

      {showServices ? (
        <>
          <div className="w-full flex items-center justify-between mt-10">
            <h3 className="text-2xl lg:text-[28px] font-bold blue-text">
              Services
            </h3>
          </div>

          <div className="w-full mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex items-center justify-between mt-10">
            <h3 className="text-2xl lg:text-[28px] font-bold blue-text">
              Console
            </h3>
            <Link
              to="/categories/consoles"
              className="text-[#6C6C6C] text-[18px] font-medium"
            >
              See all
            </Link>
          </div>

          <div className="w-full mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="w-full flex items-center justify-between mt-10">
            <h3 className="text-2xl lg:text-[28px] font-bold blue-text">
              Home Appliances
            </h3>
            <button
              type="button"
              onClick={handleNavigate}
              // to="/categories/consoles"
              className="text-[#6C6C6C] text-[18px] font-medium"
            >
              See all
            </button>
          </div>

          <div className="w-full mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;

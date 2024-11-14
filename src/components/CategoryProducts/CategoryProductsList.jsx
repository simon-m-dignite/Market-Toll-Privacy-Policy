import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ProductCard from "../Global/ProductCard";

const CategoryProductsList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPage = location.state?.from || "/";

  const handleNavigate = () => {
    if (previousPage === "/") {
      navigate("/");
    } else if (previousPage === "categories") {
      navigate("/categories/:category");
    } else {
      navigate("/categories");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-3">
        <button
          type="button"
          onClick={handleNavigate}
          // to="/categories"
          className="flex items-center gap-1"
        >
          <GoArrowLeft className="light-blue-text text-xl" />
          <span className="font-medium text-sm text-[#5C5C5C]">Back</span>
        </button>

        <span className="blue-text text-[28px] font-bold">Consoles</span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CategoryProductsList;

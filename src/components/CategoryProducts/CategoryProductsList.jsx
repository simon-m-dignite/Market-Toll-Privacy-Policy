import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ProductCard from "../Global/ProductCard";

const CategoryProductsList = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-3">
        <Link to="/categories" className="flex items-center gap-1">
          <GoArrowLeft className="light-blue-text text-xl" />
          <span className="font-medium text-sm text-[#5C5C5C]">Back</span>
        </Link>

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

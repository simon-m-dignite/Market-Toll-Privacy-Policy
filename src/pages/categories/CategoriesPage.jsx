import React from "react";
import CategoriesSidebar from "../../components/Categories/CategoriesSidebar";
import CategoriesList from "../../components/Categories/CategoriesList";

const CategoriesPage = () => {
  return (
    <div className="padding-x flex items-start gap-6 py-12">
      <div className="lg:w-[290px]">
        <CategoriesSidebar />
      </div>
      <div className="">
        <CategoriesList />
      </div>
    </div>
  );
};

export default CategoriesPage;

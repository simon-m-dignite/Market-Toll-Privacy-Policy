import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const sidebarLinks = [
  {
    title: "Fashion",
    url: "/",
  },
  {
    title: "Electronics",
    url: "/",
  },
  {
    title: "Appliances",
    url: "/",
  },
  {
    title: "Audio",
    url: "/",
  },
  {
    title: "Kitchen",
    url: "/",
  },
  {
    title: "Accessories",
    url: "/",
  },
  {
    title: "Home Decor",
    url: "/",
  },
  {
    title: "Mobile Accessories",
    url: "/",
  },
  {
    title: "Clothing",
    url: "/",
  },
  {
    title: "Interior",
    url: "/",
  },
  {
    title: "Tools",
    url: "/",
  },
  {
    title: "Grocery",
    url: "/",
  },
  {
    title: "Other",
    url: "/",
  },
];

const CategoriesSidebar = () => {
  return (
    <div className="">
      <Link to="/" className="flex items-center gap-1">
        <GoArrowLeft className="text-xl light-blue-text" />
        <span className="text-sm font-medium text-[#5C5C5C]">Back</span>
      </Link>
      <h3 className="blue-text text-[28px] font-bold my-3">Categories</h3>
      <div className="custom-shadow p-6 rounded-2xl">
        {sidebarLinks.map((l, index) => {
          return (
            <Link
              to={`/categories/${l.url}`}
              className={`w-full flex items-center justify-between ${
                index !== 12 && "border-b border-[#9D9D9DDD]"
              } py-3.5 ${l.title == "Electronics" && "blue-text"}`}
            >
              <span className="text-base font-medium">{l.title}</span>
              <MdOutlineKeyboardArrowRight className="light-blue-text text-xl" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSidebar;

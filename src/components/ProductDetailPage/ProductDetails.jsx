import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";
import ProductReviewsList from "./ProductReviewsList";
import ChooseDeliveryModal from "./ChooseDeliveryModal";
import { FiHeart } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../api/api";
import { AuthContext } from "../../context/authContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const { productId } = useParams();
  const { user } = useContext(AuthContext);

  console.log(productId);
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddToCart = () => {
    setAddToCart(!addToCart);
  };

  const handleFetchProduct = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      console.log("product data >>>", res?.data?.data);
      setProduct(res?.data?.data);
    } catch (error) {
      console.log("product err >>>", error);
    }
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

  // const displayImage = product?.images?.find(
  //   (image) => image.displayImage === true
  // );
  const defaultDisplayImage =
    product?.images?.find((image) => image.displayImage == true) ||
    product?.images?.[0]; // Fallback to the first image if no `displayImage` is true

  const [displayImage, setDisplayImage] = useState(defaultDisplayImage);
  console.log(displayImage);
  const handleThumbnailClick = (image) => {
    setDisplayImage(image);
  };

  return (
    <div className="w-full relative">
      <div className="w-full p-4 rounded-[30px] bg-[#F7F7F7]">
        <div className="w-full p-6 rounded-[30px] bg-[#ffff]">
          <Link to="/" className="flex items-center gap-1 mb-5">
            <GoArrowLeft className="text-xl" />
            <span className="font-medium text-sm text-[#5C5C5C]">Back</span>
          </Link>
          <div className="w-full flex flex-col lg:flex-row justify-start gap-x-8 gap-y-6">
            <div className="w-full relative">
              <button type="button" className="absolute z-10 top-4 right-4">
                <FiHeart className="text-white text-2xl" />
              </button>
              <img
                src={displayImage}
                alt="product image"
                className="w-full h-auto lg:h-[376px]"
              />
              <div className="w-full grid grid-cols-4 mt-3 gap-3">
                {product?.images?.map((image, index) => {
                  return (
                    <img
                      src={image?.url}
                      alt=""
                      className="rounded-xl h-[97px] w-full object-cover"
                    />
                  );
                })}
              </div>

              <div className="mt-16 hidden lg:block">
                <ProductReviewsList />
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-5">
              <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <h2 className="text-[20px] blue-text font-bold">
                  {product?.name}
                </h2>
                <h3 className="text-[24px] font-bold">${product?.price}.00</h3>
              </div>

              <div className="w-full border" />

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div className="grid grid-cols-2 gap-y-3">
                  <p className="text-[13px] text-[#7C7C7C] font-medium">City</p>
                  <p className="text-[13px] font-medium">{product?.city}</p>
                  <p className="text-[13px] text-[#7C7C7C] font-medium">
                    Category
                  </p>
                  <p className="text-[13px] font-medium">{product?.category}</p>
                </div>
                <div className="grid grid-cols-2 gap-y-3">
                  <p className="text-[13px] text-[#7C7C7C] font-medium">
                    State
                  </p>
                  <p className="text-[13px] font-medium">{product?.state}</p>
                  <p className="text-[13px] text-[#7C7C7C] font-medium">
                    Sub Category
                  </p>
                  <p className="text-[13px] font-medium">
                    {product?.subCategory}
                  </p>
                </div>
              </div>

              <div className="w-full border" />

              <div className="w-full">
                <p className="text-[16px] text-[#003DAC] font-bold mb-3">
                  Description
                </p>
                <p className="text-[14px] font-normal">
                  {product?.description}
                </p>
              </div>

              <div className="w-full border" />

              <div className="w-full">
                <p className="blue-text text-sm font-bold mb-3">Seller</p>
                <div className="flex items-center gap-2">
                  <img
                    src="/seller-profile-img.png"
                    alt="seller profile image"
                    className="w-[68px] h-[68px]"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-[#676767] text-[13px] font-normal">
                      Posted By
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[18px] font-medium">
                        Adam Mill{" "}
                      </span>
                      <span className="flex items-center gap-1">
                        <IoIosStar className="text-yellow-400" /> 4.8
                      </span>
                    </div>
                    <Link
                      to="/seller-profile/093u409u32409u3"
                      className="text-[13px] font-semibold underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full border" />

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <button
                    type="button"
                    onClick={handleShowPopup}
                    className="blue-bg text-white font-bold text-sm py-3.5 rounded-[20px] text-center w-full"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:hidden">
            <ProductReviewsList />
          </div>
        </div>
      </div>
      <ChooseDeliveryModal
        showPopup={showPopup}
        handleShowPopup={handleShowPopup}
      />
    </div>
  );
};

export default ProductDetails;

import React, { useContext, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const displayImage = product?.images?.find(
    (image) => image.displayImage === true
  );

  const handleNavigateToProductDetails = () => {
    navigate(`/products/${product?._id}`);
  };

  const handleAddToFavorite = async () => {
    // alert("Added favorite");
    try {
      const res = await axios.post(
        `${BASE_URL}/users/wishlist-product/${product?._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log("product added favorite >>>>>", res);
    } catch (error) {
      console.log("product added favorite err >>>>>", error);
      if (error?.status === 409) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="bg-white rounded-[20px] p-3 relative w-full custom-shadow cursor-pointer">
      <div className="w-full relative h-[276px]">
        <button
          type="button"
          className="absolute z-10 top-4 right-4"
          onClick={() => handleAddToFavorite()}
        >
          <FiHeart className="text-white text-2xl" />
        </button>
        <img
          src={displayImage?.url}
          alt="product"
          className="w-full h-[276px]"
          onClick={handleNavigateToProductDetails}
        />
      </div>
      <div className="w-full" onClick={handleNavigateToProductDetails}>
        <h4 className="mt-2 font-medium text-base">{product?.name}</h4>
        <p className="my-1 text-sm text-[#9D9D9DDD]">
          {product?.fulfillmentMethod?.selfPickup ? "Pickup" : "Delivery"}
        </p>
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center gap-1 w-full">
            <IoIosStar className="text-yellow-400 text-lg" />
            <span className="text-base text-[#606060] font-medium">4.3</span>
          </div>
          <p className="text-[18px] font-bold blue-text">
            ${product?.price}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

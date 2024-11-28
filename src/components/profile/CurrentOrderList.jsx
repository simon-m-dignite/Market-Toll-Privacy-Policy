import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import Loader from "../Global/Loader";

const CurrentOrderList = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const fetchCurrentPurchasedProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE_URL}/users/order-product-purchased-current`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      //   console.log("current orders data >>>>>", res?.data?.data);
      setCurrentOrders(res?.data?.data);
    } catch (error) {
      console.log("current orders data err >>>>>", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentPurchasedProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      {currentOrders?.map((currentOrder, index) => {
        return (
          <div className="w-full" key={index}>
            <div className="w-full flex items-center justify-between border-b py-3 mt-2">
              <p className="font-bold text-base">
                Order ID # {currentOrder?._id?.slice(0, 4)?.toUpperCase()}
              </p>
              <Link
                to={`/order-history/order-details/${currentOrder?._id}`}
                className="font-bold text-xs md:text-sm"
              >
                View Order Summary
              </Link>
            </div>

            <div className="w-full">
              {currentOrder?.sellersProducts?.map((sellerProduct, index) => {
                return (
                  <div className="w-full" key={index}>
                    {sellerProduct?.fulfillmentMethods?.map((product, key) => {
                      return (
                        <div className="w-full" key={key}>
                          {product?.products?.map((pro, abc) => {
                            return (
                              <div
                                className="w-full grid grid-cols-1 lg:grid-cols-3 py-3 border-b"
                                key={abc}
                              >
                                <div className="flex items-center justify-start gap-2">
                                  <img
                                    src="/product-img-1.png"
                                    alt="product-img"
                                    className="w-[80px] h-[80px] rounded-xl"
                                  />
                                  <div className="flex flex-col items-start justify-center gap-0">
                                    <span className="text-sm md:text-base font-semibold">
                                      {pro?.product?.name}
                                    </span>
                                    <span className="text-xs md:text-sm text-[#9D9D9DDD]">
                                      {pro?.fulfillmentMethod?.delivery
                                        ? "Delivery"
                                        : "Self-Pickup"}
                                    </span>
                                    <div className="lg:hidden flex items-center justify-center gap-1">
                                      <span className="text-sm text-[#9D9D9DDD]">
                                        Price
                                      </span>
                                      <span className="text-sm blue-text font-semibold pl-10">
                                        ${pro?.product?.price?.toFixed(2)}
                                      </span>
                                    </div>
                                    <Link
                                      to={`/products/${pro?.product?._id}`}
                                      className="text-xs font-semibold md:hidden"
                                    >
                                      View Product Details
                                    </Link>
                                  </div>
                                </div>

                                <div className="hidden lg:flex flex-col items-center justify-center gap-1">
                                  <span className="text-sm text-[#9D9D9DDD]">
                                    Price
                                  </span>
                                  <span className="text-xl blue-text font-semibold pl-10">
                                    ${pro?.product?.price?.toFixed(2)}
                                  </span>
                                </div>

                                <div className="hidden text-end lg:flex items-center justify-end">
                                  <Link
                                    to={`/products/${pro?.product?._id}`}
                                    className="font-bold text-sm"
                                  >
                                    View Product Details
                                  </Link>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentOrderList;

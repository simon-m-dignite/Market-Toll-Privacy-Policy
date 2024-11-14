import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ServiceDetailsPage = () => {
  const navigate = useNavigate();

  const handleAddService = () => {
    navigate("/boost-service");
  };

  return (
    <div className="padding-x py-6 w-full">
      <div className="w-full bg-[#F7F7F7]">
        <div className="w-full bg-white px-4 md:px-8 lg:px-12 py-12 rounded-[30px]">
          <div className="w-full flex flex-col lg:flex-row justify-start gap-x-8 gap-y-6">
            <div className="w-full">
              <img
                src="/service-img-1.png"
                alt="product image"
                className="w-full h-auto lg:h-[336px]"
              />
              <div className="w-full grid grid-cols-4 mt-3 gap-3">
                <img src="/service-img-1.png" alt="" className="rounded-xl" />
                <img src="/service-img-1.png" alt="" className="rounded-xl" />
                <img src="/service-img-1.png" alt="" className="rounded-xl" />
                <img src="/service-img-1.png" alt="" className="rounded-xl" />
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-5">
              <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <h2 className="text-[20px] blue-text font-bold">AC Service</h2>
                <h3 className="text-[24px] font-bold">$50.00</h3>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div className="grid grid-cols-2 gap-y-3">
                  <p className="text-[13px] text-[#7C7C7C] font-medium">City</p>
                  <p className="text-[13px] font-medium">Toronto</p>
                </div>
                <div className="grid grid-cols-2 gap-y-3">
                  <p className="text-[13px] text-[#7C7C7C] font-medium">
                    State
                  </p>
                  <p className="text-[13px] font-medium">Canada</p>
                </div>
              </div>

              <div className="w-full">
                <p className="text-[16px] text-[#003DAC] font-bold mb-3">
                  Description
                </p>
                <p className="text-[14px] font-normal">
                  Xbox Series X is Microsoft's flagship gaming console, offering
                  unparalleled performance and speed. With its powerful AMD Zen
                  2 processor and RDNA 2 graphics architecture, it delivers
                  stunning 4K visuals and supports up to 120 frames per second.
                  The Series X features a 1TB SSD for rapid load times and
                  seamless gameplay, while its backward compatibility allows
                  access to a vast library of Xbox One, Xbox 360, and original
                  Xbox games. Its sleek, minimalist design and advanced cooling
                  system ensure optimal performance and quiet operation.
                  Additionally, the console supports ray tracing, Dolby Vision,
                  and Dolby Atmos for an immersive gaming experience
                </p>

                <div className="w-full mt-4 flex items-center justify-between">
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
                  <div>
                    <Link
                      to="/chats"
                      className="flex items-center justify-end gap-2 w-[127px]"
                    >
                      <img
                        src="/chat-icon.png"
                        alt="chat icon"
                        className="w-[18px] h-[18px]"
                      />
                      <span className="text-[13px] text-[#676767] block">
                        Chat With Seller
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;

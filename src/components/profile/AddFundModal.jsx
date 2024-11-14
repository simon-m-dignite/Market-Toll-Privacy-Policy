import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const AddFundModal = ({ showFundModal, setShowFundModal, onclick }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleToggleSuccessModal = () => {
    if (showSuccessModal) {
      // Close both modals when success modal is closed
      setShowSuccessModal(false);
      setShowFundModal(false);
    } else {
      // Open the success modal and keep the withdraw modal open
      setShowSuccessModal(true);
    }
  };

  return (
    showFundModal && (
      <div className="w-full h-screen fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
        <div className="bg-white relative w-full lg:w-[575px] h-[370px] rounded-2xl p-6 flex flex-col items-start justify-center gap-5">
          <button
            type="button"
            onClick={onclick}
            className="w-6 h-6 rounded-full bg-gray-200 p-1 absolute top-4 right-4"
          >
            <IoClose className="w-full h-full" />
          </button>
          <p className="text-lg font-bold">Add Fund</p>

          <div className="w-full bg-[#F5F5F5] rounded-2xl h-[48px] px-4 flex items-center justify-start gap-2">
            <img
              src="/mastercard-icon.png"
              alt="mastercard icon"
              className="w-[24.79px] h-[15.33px]"
            />
            <span className="text-sm text-[#5C5C5C]">**** **** **** 8941</span>
          </div>

          <div className="w-full flex items-center justify-between">
            <span className="text-sm font-medium">
              Available Wallet balance
            </span>
            <span className="font-bold text-[15px]">$240.00</span>
          </div>

          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="amount" className="text-sm font-medium">
              Enter Amount
            </label>
            <div className="w-full border rounded-2xl px-3 flex items-center gap-2">
              <span className="light-blue-text text-sm">$</span>
              <input
                type="text"
                placeholder="200"
                className="w-full outline-none p-3 text-sm"
              />
            </div>
          </div>

          <div className="w-full">
            <button
              type="button"
              onClick={handleToggleSuccessModal}
              className="text-white font-bold w-full blue-bg py-3 rounded-2xl"
            >
              Add
            </button>
          </div>
        </div>
        <SuccessModal
          showSuccessModal={showSuccessModal}
          handleClose={handleToggleSuccessModal}
        />
      </div>
    )
  );
};

const SuccessModal = ({ showSuccessModal, handleClose }) => {
  return (
    showSuccessModal && (
      <div className="w-full h-screen fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
        <div className="bg-white relative w-full lg:w-[440px] h-auto rounded-2xl px-6 py-10 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleClose}
            className="w-6 h-6 rounded-full bg-gray-200 p-1 absolute top-4 right-4"
          >
            <IoClose className="w-full h-full" />
          </button>
          <div className="rounded-full blue-bg flex items-center justify-center w-[69.67px] h-[69.67px] p-2.5">
            <FaCheck className="text-white w-full h-full" />
          </div>

          <div className="flex flex-col items-center">
            <span className="blue-text font-extrabold text-[18px]">
              Fund Added
            </span>
            <span className="blue-text font-extrabold text-[18px]">
              $120.00
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">
              Funds has been added to your wallet
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default AddFundModal;

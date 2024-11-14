import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const WithdrawFundModal = ({ showModal, setShowModal, onclick }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleToggleSuccessModal = () => {
    if (showSuccessModal) {
      // Close both modals when success modal is closed
      setShowSuccessModal(false);
      setShowModal(false);
    } else {
      // Open the success modal and keep the withdraw modal open
      setShowSuccessModal(true);
    }
  };

  return (
    showModal && (
      <div className="w-full h-screen fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
        <div className="bg-white relative w-full lg:w-[575px] h-[276px] rounded-2xl p-6 flex flex-col items-start justify-center gap-5">
          <button
            type="button"
            onClick={onclick}
            className="w-6 h-6 rounded-full bg-gray-200 p-1 absolute top-4 right-4"
          >
            <IoClose className="w-full h-full" />
          </button>
          <p className="text-lg font-bold">Withdraw Funds</p>

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
              Withdraw
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
        <div className="bg-white relative w-full lg:w-[432px] h-auto rounded-2xl px-6 py-10 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleClose}
            className="w-6 h-6 rounded-full bg-gray-200 p-1 absolute top-4 right-4"
          >
            <IoClose className="w-full h-full" />
          </button>
          <div className="rounded-full blue-bg flex items-center justify-center w-[44px] h-[44px]">
            <FaCheck className="text-white text-2xl" />
          </div>
          <p className="text-lg font-bold">Withdraw Successfully!</p>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">Amount Withdraw</span>
            <span className="light-blue-text font-bold text-[24px]">
              USD $200
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">Reference ID</span>
            <span className="light-blue-text font-bold text-[14px]">
              9621486393454
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">Name</span>
            <span className="light-blue-text font-bold text-[14px]">
              Olivia James
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">Date</span>
            <span className="light-blue-text font-bold text-[14px]">
              Wed, 10 Jan
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">Type</span>
            <span className="light-blue-text font-bold text-[14px]">
              Withdrawal
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#959595] text-sm">Description</span>
            <span className="light-blue-text font-bold text-[14px] text-center">
              Direct To Local Bank Account <br /> (**** **** ****499)
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default WithdrawFundModal;

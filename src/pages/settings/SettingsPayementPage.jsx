import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SettingsPayementPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [isCardAdded, setIsCardAdded] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpenForm();
    setIsCardAdded(true);
  };

  return (
    <div className="w-full px-5">
      <h2 className="font-bold text-[28px] blue-text">Payment</h2>

      <div className="w-full border mt-5 mb-4" />
      {openForm ? (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start gap-5"
        >
          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="cardHolderName" className="text-[13px] font-medium">
              Card Holder Name
            </label>
            <input
              type="text"
              placeholder="John Smith"
              className="border rounded-2xl px-4 py-2.5 outline-none w-full text-sm"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="cardNumber" className="text-[13px] font-medium">
              Card Number
            </label>
            <input
              type="text"
              placeholder="0000 0000 0000"
              className="border rounded-2xl px-4 py-2.5 outline-none w-full text-sm"
            />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="expiry" className="text-[13px] font-medium">
                Expiry
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="border rounded-2xl px-4 py-2.5 outline-none w-full text-sm"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="cvc" className="text-[13px] font-medium">
                CVC
              </label>
              <input
                type="text"
                placeholder="0000"
                className="border rounded-2xl px-4 py-2.5 outline-none w-full text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-base font-bold py-3 w-full text-white blue-bg rounded-2xl"
          >
            Add
          </button>
        </form>
      ) : (
        <>
          {!isCardAdded && (
            <button
              type="button"
              onClick={handleOpenForm}
              className="mt-4 flex items-center justify-between custom-shadow py-4 px-5 rounded-2xl w-full"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/credit-card-icon.png"
                  alt="credit-card-icon"
                  className="w-5 h-5"
                />
                <span className="text-sm text-[#5C5C5C]">
                  Add Debit/ Credit Card
                </span>
              </div>
              <MdOutlineKeyboardArrowRight className="light-blue-text text-2xl" />
            </button>
          )}
        </>
      )}
      {isCardAdded && (
        <button
          type="button"
          onClick={handleOpenForm}
          className="mt-4 flex items-center justify-between custom-shadow py-4 px-5 rounded-2xl w-full"
        >
          <div className="flex items-center gap-2">
            <img
              src="/mastercard-icon.png"
              alt="mastercard-icon"
              className="w-[24.79px] h-[15.33px]"
            />
            <span className="text-sm text-[#5C5C5C]">**** **** **** 8941</span>
          </div>
          <MdOutlineKeyboardArrowRight className="light-blue-text text-2xl" />
        </button>
      )}
    </div>
  );
};

export default SettingsPayementPage;

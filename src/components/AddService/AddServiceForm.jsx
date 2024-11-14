import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { STATES } from "../../constants/states";
import { LuMinus } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";

const AddServiceForm = () => {
  const [productImages, setProductImages] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(""); // Reset city when state changes
  };

  // Get cities for the selected state
  const selectedStateData = STATES.find(
    (state) => state.name === selectedState
  );
  const cities = selectedStateData ? selectedStateData.cities : [];

  // Handle adding an image
  const handleImageChange = (e) => {
    const newImage = e.target.files[0];
    if (newImage && productImages.length < 5) {
      setProductImages((prevImages) => [...prevImages, newImage]);
    } else {
      alert("You can upload a maximum of 5 images.");
    }
  };

  // Handle deleting an image
  const handleDeleteImage = (index) => {
    setProductImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/service-review");
  };

  return (
    <div className="padding-x w-full">
      <div className="w-full bg-[#F7F7F7] rounded-[30px] px-4 lg:px-8 py-12">
        <div className="w-full flex items-center gap-6">
          <Link
            to="/add-service-or-product"
            className="flex items-center gap-1"
          >
            <GoArrowLeft className="light-blue-text text-xl" />{" "}
            <span className="text-sm font-medium text-[#5C5C5C]">Back</span>
          </Link>

          <h2 className="blue-text font-bold text-[24px]">
            Add Service Details
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full padding-x mt-6">
          <label htmlFor="productImage" className="text-sm font-semibold">
            Upload Photos
          </label>
          <div className="w-full flex items-start justify-start mt-2 gap-6">
            {/* Image Upload Area */}
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center h-[170px] w-[170px] rounded-[20px] cursor-pointer bg-white hover:bg-gray-100 relative"
              >
                <div className="flex flex-col items-center justify-center w-full h-full rounded-full">
                  {productImages.length === 0 ? (
                    <GoPlus className="w-[48px] h-[48px] text-light-blue" />
                  ) : (
                    // Show the 5th image inside the input area
                    <div className="h-full w-full rounded-[20px] relative">
                      <button
                        type="button"
                        className="w-5 h-5 z-20 rounded-full bg-gray-300 p-1 absolute top-3 right-3"
                        onClick={() => handleDeleteImage(0)} // Delete first image
                      >
                        <IoClose className="w-full h-full" />
                      </button>
                      <img
                        src={URL.createObjectURL(productImages[0])}
                        alt="product"
                        className="h-full w-full rounded-[20px] object-cover"
                      />
                    </div>
                  )}
                </div>
                <input
                  onChange={handleImageChange}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
              <span className="text-sm font-normal mt-1">
                Upload Service Photo
              </span>
            </div>

            {/* Image Preview and Selection (for images after the 5th one) */}
            <div className="flex gap-6">
              {productImages.slice(1, 5).map((image, index) => (
                <div className="">
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`product-image-${index + 1}`}
                      className="h-[170px] w-[170px] rounded-[20px] object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index + 1)} // Delete corresponding image
                      className="w-5 h-5 z-20 rounded-full bg-gray-300 p-1 absolute top-2 right-2"
                    >
                      <IoClose className="w-full h-full" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      name=""
                      id=""
                      className="w-[14px] h-[14px]"
                    />
                    <label htmlFor="" className="text-sm font-medium">
                      Select as cover photo
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border my-6" />

          <div className="w-full flex flex-col gap-6">
            <div className="w-full">
              <label htmlFor="serviceName" className="text-sm font-semibold">
                Service Name
              </label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                placeholder="Xbox Series X 1 TB"
                className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
              />
              <span className="text-[13px] text-[#5C5C5C] float-end">0/55</span>
            </div>

            <div className="w-full">
              <label htmlFor="description" className="text-sm font-semibold">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={6}
                className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
              ></textarea>
            </div>

            <div className="w-full">
              <label htmlFor="price" className="text-sm font-semibold">
                Price
              </label>
              <input
                type="text"
                placeholder="$199.00"
                className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
              />
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="state" className="text-sm font-medium">
                  State
                </label>
                <select
                  name="state"
                  id="state"
                  className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">Select a State</option>
                  {STATES.map((state, index) => (
                    <option key={index} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <label htmlFor="city" className="text-sm font-medium">
                  City
                </label>
                <select
                  name="city"
                  id="city"
                  className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedState}
                >
                  <option value="">Select a City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <Link
                to="/add-service-or-product"
                className="bg-white light-blue-text font-semibold text-sm py-3 rounded-[20px] text-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="blue-bg text-white font-semibold text-sm py-3 rounded-[20px]"
              >
                Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;

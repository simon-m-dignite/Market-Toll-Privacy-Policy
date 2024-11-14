import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { STATES } from "../../constants/states";
import { LuMinus } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";

const AddProductForm = () => {
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
    navigate("/product-review");
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
            Add Product Details
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
                Upload Product Photo
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

            {/* Select Cover Photo Option for Images */}
            {/* {productImages.length > 0 && (
              <div className="mt-4">
                <input
                  type="radio"
                  name="makeCoverPhoto"
                  id="makeCoverPhoto"
                  className="w-[14px] h-[14px]"
                />
                <label htmlFor="makeCoverPhoto" className="text-sm">
                  Select as cover photo
                </label>
              </div>
            )} */}
          </div>

          <div className="w-full border my-6" />

          <div className="w-full flex flex-col gap-6">
            <div className="w-full">
              <label htmlFor="productName" className="text-sm font-semibold">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Xbox Series X 1 TB"
                className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
              />
              <span className="text-[13px] text-[#5C5C5C] float-end">0/55</span>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="w-full">
                <label
                  htmlFor="productCategory"
                  className="text-sm font-semibold"
                >
                  Category
                </label>
                <select
                  name="productCategory"
                  id="productCategory"
                  className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
                >
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="productSubCategory"
                  className="text-sm font-semibold"
                >
                  Sub Category
                </label>
                <select
                  name="productSubCategory"
                  id="productSubCategory"
                  className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
                >
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                  <option value="">Select Category</option>
                </select>
              </div>
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

            <div className="w-full">
              <label htmlFor="quantity" className="text-sm font-semibold">
                Quantity
              </label>
              <div className="flex items-center justify-start gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setQuantity(quantity - 1)}
                  className="w-[24px] h-[24px] bg-[#dcdbdb] rounded-full p-1"
                >
                  <LuMinus className="w-full h-full" />
                </button>
                <input
                  type="number"
                  placeholder="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-[60px] text-center py-4 px-5 outline-none text-sm rounded-[10px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-[24px] h-[24px] bg-[#0085FF] rounded-full p-1"
                >
                  <HiPlus className="w-full h-full text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-4">
              <label
                htmlFor="fulfillmentMethod"
                className="text-sm font-semibold mb-2"
              >
                Fulfillment Method
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="selfPickup"
                  id="selfPickup"
                  className="w-[16px] h-[16px]"
                />
                <label htmlFor="selfPickup" className="text-sm font-medium">
                  Self Pickup
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="delivery"
                  id="delivery"
                  className="w-[16px] h-[16px]"
                />
                <label htmlFor="delivery" className="text-sm font-medium">
                  Delivery
                </label>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="pickupAddress" className="text-sm font-semibold">
                Pickup Address
              </label>
              <input
                type="text"
                id="pickupAddress"
                name="pickupAddress"
                placeholder="16 Maple Avenue, Los Angeles, United States"
                className="w-full py-4 px-5 outline-none text-sm rounded-[20px] bg-white text-[#5C5C5C] placeholder:text-[#5C5C5C]"
              />
            </div>

            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Same as profile
                </span>
              </label>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                type="button"
                className="bg-white light-blue-text font-semibold text-sm py-3 rounded-[20px]"
              >
                Cancel
              </button>
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

export default AddProductForm;

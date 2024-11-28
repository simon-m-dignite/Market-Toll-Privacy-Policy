import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { STATES } from "../../constants/states";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import axios from "axios";
import { BASE_URL } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import {
  CitySelect,
  CountrySelect,
  LanguageSelect,
  RegionSelect,
  StateSelect,
} from "react-country-state-city";

const SettingsEditHomeAddress = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  const [addressAdded, setAddressAdded] = useState(false);
  const { user } = useContext(AuthContext);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const selectedStateData = STATES.find(
    (state) => state.name === selectedState
  );
  const cities = selectedStateData ? selectedStateData.cities : [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${BASE_URL}/users/address`,
        {
          country: "United States",
          streetAddress: "",
          apartment_suite: "",
          state: "Alabama",
          city: "Abbeville",
          zipCode: "",
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log("Update address res >>>>", res);
      setAddressAdded(true);
      if (res.status == 200) {
        navigate("/settings/addresses");
      }
    } catch (error) {
      console.log("Update address error >>>>", error);
    }
    // setAddressAdded(!addressAdded);
  };

  const handleCloseModalAndNaivigate = () => {
    setAddressAdded(!addressAdded);
    navigate("/settings/addresses");
  };

  return (
    <div className="w-full px-5">
      <Link to="/settings/addresses" className="flex items-center gap-2">
        <GoArrowLeft className="text-2xl" />
        <span className="font-bold text-[28px] blue-text">
          Edit Home Address
        </span>
      </Link>
      <div className="w-full border mt-5 mb-4" />
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start gap-5"
      >
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="country" className="text-[13px] font-medium">
            Country
          </label>
          <input
            type="text"
            disabled
            placeholder="United States"
            className="border rounded-2xl px-4 py-3 outline-none w-full text-sm bg-white"
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
              className="w-full px-4 py-3 rounded-full border outline-none text-sm bg-white"
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
              className="w-full px-4 py-3 rounded-full border outline-none text-sm bg-white"
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

        <button
          type="submit"
          className="text-base font-bold py-3 w-full text-white blue-bg rounded-2xl"
        >
          Save
        </button>
      </form>
      <AddressModal
        addressAdded={addressAdded}
        onclose={handleCloseModalAndNaivigate}
      />
    </div>
  );
};

export default SettingsEditHomeAddress;

const AddressModal = ({ addressAdded, onclose }) => {
  return (
    addressAdded && (
      <div className="w-full h-screen fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
        <div className="bg-white w-full lg:w-[440px] h-[209px] p-7 relative rounded-[20px] flex flex-col items-center justify-center gap-2">
          <button
            type="button"
            onClick={onclose}
            className="w-6 h-6 rounded-full p-1 bg-gray-100 absolute top-5 right-5"
          >
            <IoClose className="w-full h-full" />
          </button>

          <div className="rounded-full blue-bg w-[69.67px] h-[69.67px] p-3">
            <FaCheck className="text-white w-full h-full" />
          </div>
          <span className="text-lg blue-text font-bold">Address Changed</span>
          <span className="text-[#5c5c5c]">Address changed successfully</span>
        </div>
      </div>
    )
  );
};

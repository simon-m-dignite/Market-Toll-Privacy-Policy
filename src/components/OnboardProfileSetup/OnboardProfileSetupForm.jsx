import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import AddLocation from "./AddLocation";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const OnboardProfileSetupForm = () => {
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  console.log(count);
  const navigate = useNavigate();

  const handleNext = () => {
    if (image) {
      setCount(2);
    } else {
      alert("Please upload a profile picture before proceeding.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedCity) {
      // alert("Please select both state and city.");
      return;
    }
    navigate("/add-service-or-product");
    console.log(image);
    console.log(selectedState);
    console.log(selectedCity);
    console.log("form submitted");
  };

  return (
    <div className="w-full bg-[#F7F7F7] rounded-[30px] px-4 py-12 relative">
      {count > 1 && (
        <button
          type="button"
          onClick={() => setCount(1)}
          className="text-sm text-[#5C5C5C] font-medium absolute top-5 left-10 flex items-center gap-1"
        >
          <GoArrowLeft className="text-xl light-blue-text" />
          Back
        </button>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <h2 className="text-[36px] font-bold blue-text">
          {count === 1 ? "Add Profile Picture" : "Add Location"}
        </h2>

        {count === 1 ? (
          <ProfilePicture image={image} setImage={setImage} />
        ) : (
          <AddLocation
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        )}

        <div className="mt-3 w-full lg:w-[635px]">
          <button
            type={count > 1 ? "submit" : "button"}
            onClick={count > 1 ? handleSubmit : handleNext}
            className="blue-bg text-white rounded-full font-bold py-3 w-full lg:w-[635px]"
          >
            {count === 1 ? (image ? "Next" : "Upload Photo") : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardProfileSetupForm;

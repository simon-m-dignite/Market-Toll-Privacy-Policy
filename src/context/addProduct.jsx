import React, { useState } from "react";
import { createContext } from "react";

export const ProductDataReview = createContext();

const AddProductProvider = ({ children }) => {
  const [productData, setProductData] = useState("");

  return (
    <ProductDataReview.Provider value={{ productData, setProductData }}>
      {children}
    </ProductDataReview.Provider>
  );
};

export default AddProductProvider;

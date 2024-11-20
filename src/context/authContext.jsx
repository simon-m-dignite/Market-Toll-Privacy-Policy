import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [verificationStatus, setVerificationStatus] = useState({
    email: false,
    phone: false,
  });
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  return (
    <AuthContext.Provider
      value={{
        verificationStatus,
        setVerificationStatus,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

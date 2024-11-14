import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [signUpData, setSignUpData] = useState(null);
  if (signUpData !== null) {
    console.log("signUpData >>", signUpData);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signUpData, setSignUpData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

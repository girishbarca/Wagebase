import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currRests, setCurrRests] = useState([]);

  return (
    <UserContext.Provider
      value={{
        currRests,
        setCurrRests,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import React, { createContext } from "react";
export const AuthContext = createContext(null);
const Providers = ({ children }) => {
  const user = { displayName: "Sagor Nodi" };
  return <AuthContext.Provider value={user}>
    {children}
  </AuthContext.Provider>;
};

export default Providers;

import React, { createContext, useEffect, useState } from "react";

export const GlobalStorage = createContext();

export const GlobalContext = ({ children }) => {
  const [mega, setMega] = useState();

  

  useEffect(() => {
    fetch("https://viacep.com.br/ws/01001000/json/")
    .then(res => res.json())
    .then(json => setMega(json))
    
  }, [])

  return <GlobalStorage.Provider value={{ mega, setMega }}>{children}</GlobalStorage.Provider>;
};

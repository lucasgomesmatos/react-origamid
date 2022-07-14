import React, { createContext, useEffect, useState } from "react";

export const GlobalStorage = createContext();

export const GlobalContext = ({ children }) => {
  const [dados, setDados] = useState();

  

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
    .then(res => res.json())
    .then(json => setDados(json))
    
  }, [])

  function limpaDados() {
    setDados(null)
  }

  return <GlobalStorage.Provider value={{ dados, setDados, limpaDados }}>{children}</GlobalStorage.Provider>;
};

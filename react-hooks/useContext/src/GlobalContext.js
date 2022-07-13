import React, { createContext, useEffect, useState } from "react";

export const GlobalStore = createContext();

export const GlobalContext = ({ children }) => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((res) => res.json())
      .then((json) => setProduto(json));
  }, []);

  function limpaDados() {
    setProduto(null);
  }

  return (
    <GlobalStore.Provider value={{ produto, setProduto,limpaDados }}>
      {children}
    </GlobalStore.Provider>
  );
};

import React, { useContext } from "react";
import { GlobalStorage } from "./GlobalContext";

export const Produto = () => {
  const dados = useContext(GlobalStorage);
  if (dados.mega === null) return null;

  return <div>
    {
    dados.mega && 
    <div>
      <p>{dados.mega.localidade}</p>
      <p>{dados.mega.cep }</p>
    </div>
    
    }</div>;
};

import React, { useContext } from "react";
import { GlobalStorage } from "./GlobalContext";

import "./style.css";

export const Produto = () => {
  const {dados} = useContext(GlobalStorage);
  if (dados === null) return null;
  return (
    <div>
      <h1>Produto:</h1>
      {dados && dados.map((produto) => (
        <li key={produto.id}>{produto.nome} </li>
      ))}
    </div>
  );
};

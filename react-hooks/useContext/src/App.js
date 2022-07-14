import React from "react";
import { GlobalContext } from "./GlobalContext";
import Limpar from "./Limpar";
import { Produto } from "./Produto";



const App = () => {
  return (
    <GlobalContext>
      <Limpar/>
      <Produto/>
    </GlobalContext>
  );
};

export default App;

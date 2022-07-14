import React from "react";
import { GlobalContext } from "./GlobalContext";
import { Produto } from "./Produto";



const App = () => {
  return (
    <GlobalContext>
      <Produto/>
    </GlobalContext>
  );
};

export default App;

import React from "react";
import { GlobalStorage } from "./GlogalContext";
import Produto from "./Produto";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;

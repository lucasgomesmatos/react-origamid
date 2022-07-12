import React, { useEffect, useState } from "react";
import Produto from "./Produto"

const App = () => {
  const [produto, setProduto] = useState(null);

  function handleClick(e) {
    setProduto(e.target.innerText);
  }

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if(produtoLocal !== null) 
    setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if(produto !== null)  window.localStorage.setItem("produto", produto);
  }, [produto]);

  return (
    <div>
      <h1>Preferencia: {produto !== null ? produto : ""}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        smartphone
      </button>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      {produto && <Produto produto={produto}/>}
    </div>
  );
};

export default App;

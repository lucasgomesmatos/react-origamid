import React from "react";
import useLocalStorage  from "./useLocalStorage/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "")

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <>
      <p>Produto: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button style={{ marginLeft: "1rem" }} onClick={handleClick}>smartphone</button>
    </>
  );
};

export default App;

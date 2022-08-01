import React, { useCallback, useMemo, useState } from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = useState(0);

  // function handleClick() {
  //   setContar(contar + 1);
  // }
  // const valor = useMemo(() => {
  //   const localItem = window.localStorage.getItem("produto");
  //   console.log("Aconteceu o memo");
  //   return localItem;
  // }, []);

  // const t1 = performance.now();
  // const valor = useMemo(() => {
  //   return operacaoLenta();
  // }, []);

  // console.log(performance.now() - t1);
  // console.log(valor);

  const handleClick = useCallback(() => {
    setContar((contar) => contar + 1)
  }, [])

  return <button onClick={handleClick}>{contar}</button>;
};

export default App;

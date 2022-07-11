import React, { useState } from "react";

const App = () => {
  const [ativo, setAtivo] = useState(true);
  const [dados, setDados] = useState({ nome: "Lucas", idade: 23 });

  function handleClick() {
    setAtivo(!ativo)
    setDados({...dados, faculdade: "Está estudando"})
  }

  return (
    <div>
      <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
      </div>
      <button onClick={handleClick}>
        {ativo ? "Butão Ativo" : "Butão Inativo"}
      </button>
    </div>
  );
};

export default App;

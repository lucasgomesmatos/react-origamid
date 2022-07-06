import React from "react";

const App = () => {
  function mostrarNome() {
    return "Lucas";
  }

  const nome = mostrarNome();

  const carro = {
    nome: "Hilux",
    portas: 5,
    abrir() {
      return "Abriu a porta";
    },
  };

  const estiloP = {
    color: "tomato",
    fontSize: "2rem",
  };

  return (
    <div>
      <a className="ativo" href="https://github.com/lucasgomesmatos">
        {nome === "Lucas" ? "Lucas" : "Github"}
      </a>
      <p>{new Date().getFullYear()}</p>

      <p style={estiloP}>{carro.nome}</p>
      <p>{carro.portas}</p>
      <p>{carro.abrir()}</p>
    </div>
  );
};

export default App;

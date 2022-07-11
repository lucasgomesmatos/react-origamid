import React, { useState } from "react";
import { Produto } from "./Produto/Produto";

const App = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const data = await (
      await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      )
    ).json();
    setProduto(data);
    setCarregando(false);
  }

  return (
    <>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        Tablet
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>Notebook</button>
      <div>
        {carregando && <p>Carregando...</p>}
        {!carregando && produto && <Produto {...produto} />}
      </div>
    </>
  );
};

export default App;

import React, { useState } from "react";
import Produto from "./Produto/Produto";

const App = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [dados, setDados] = useState(null);
  const [loading, setLoding] = useState(null);

  const handleClick = async (e) => {
    setLoding(true)
    const target = e.target.innerText
    const data = await (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${target}`)).json();
    setDados(data)
    setLoding(false)
  }

  return (
    <div>
     <button onClick={handleClick} style={{ margin: "1rem" }}>Tablet</button>
     <button onClick={handleClick} style={{ margin: "1rem" }}>Smartphone</button>
     <button onClick={handleClick} style={{ margin: "1rem" }}>Notebook</button>
     { loading && <p>"Carregando..."</p>}
     { !loading && dados && <Produto {...dados}/>}
    </div>
  );
};

export default App;

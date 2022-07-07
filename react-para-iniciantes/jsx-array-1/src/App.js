import React from "react";

const App = () => {
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$", "")) > 1500
  );

  return (
    <section>
      {dados.map(({ id, nome, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{ background: cor, color: "#fff" }}>{cor}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* {produtos.filter((produto) => Number(produto.preco.replace("R$", "")) > 1500)
      .map(produto => (
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
          <ul>
            {produto.cores.map(cor => (
              <li key={cor} style={{ background: cor, color: "#fff" }}>{cor}</li>
            ))}
          </ul>
          <p>{produto.preco}</p>
        </div>
      ))
      } */}
    </section>
  );
};

export default App;

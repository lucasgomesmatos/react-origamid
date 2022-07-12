import { useEffect, useState } from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, [produto]);
  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ { dados.preco}</p>
    </div>
  );
};

export default Produto;

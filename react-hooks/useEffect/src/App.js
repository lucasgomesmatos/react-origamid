import React, { useEffect, useState } from "react";

const App = () => {
  const [dados, setDados] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await (
      await fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
    ).json();
    setDados(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {!loading && dados && (
        <div>
          <p>{dados.nome}</p>
          <p>{dados.preco}</p>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
          <p></p>
        </div>
      )}
    </>
  );
};

export default App;

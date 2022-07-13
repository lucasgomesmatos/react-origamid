import React, { useContext, useState } from "react";
import { GlobalStore } from "./GlobalContext";

const Produto = () => {
  const dados = useContext(GlobalStore);

  const [mostrar, setMostrar] = useState(false);

  if (dados.produto === null) return null;
  return (
    <div>
      <button
        onClick={() => {
          setMostrar(true);
        }}
      >
        Clique
      </button>
      {mostrar && (
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setMostrar(false)
          }}
        >
          Limpar
        </button>
      )}
      <p>{!mostrar && "Sem produtos no momento."}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {mostrar &&
          dados.produto.map((item) => (
            <div key={item.id}>
              <p>{item.nome}</p>
              <img
                style={{ width: "150px" }}
                src={item.fotos[0].src}
                alt={item.nome}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Produto;

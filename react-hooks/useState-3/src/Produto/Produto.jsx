import React from "react";

export const Produto = ({ descricao, fotos, id, nome, preco }) => {
  return (
    <div>
      <p>{nome}</p>
      <p>R$ {preco}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </div>
  );
};

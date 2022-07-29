import React, { useEffect, useState } from 'react';
import '../styles/components/produto.sass';

const Produto = ({ ative }) => {
  const [produto, setProduto] = useState();

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((data) => data.json())
      .then((json) => setProduto(json));
  }, []);

  return (
    <div>
      <h1>
        {ative === true
          ? produto.map((item) => (
              <div key={item.id}>
                <p>{item.nome}</p>
                <img src={item.fotos[0].src} alt="" />
              </div>
            ))
          : console.log(produto)}
      </h1>
    </div>
  );
};

export default Produto;

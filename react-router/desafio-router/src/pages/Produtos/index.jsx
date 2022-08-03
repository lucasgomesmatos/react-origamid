import { useEffect, useState } from 'react';
import * as C from './style.js';

import { NavLink } from 'react-router-dom';

export const Produtos = () => {
  const [produtos, setProdutos] = useState('');

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((data) => data.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return false;
  return (
    <section>
      <C.Container className="animaLeft">
        {produtos &&
          produtos.map((produto) => (
            <NavLink to={`\produto/${produto.id}`} key={produto.id}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              <h2>{produto.nome}</h2>
            </NavLink>
          ))}
      </C.Container>
    </section>
  );
};
